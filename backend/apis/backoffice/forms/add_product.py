# -*- coding: utf-8 -*-

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Product, Variety, Color, Size
from rest_framework.parsers import MultiPartParser, JSONParser
from django.db.transaction import atomic
import json
from backend.apis.utils.libs import getFromRequestData


class VarietySerializer(serializers.ModelSerializer):
    class Meta:
        model = Variety
        fields = ("color", "size", "quantity", "picture1", "picture2", "picture3", "picture4",)


class AddProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Product
        fields = "__all__"

    def create(self, validated_data):
        # We remove varieties_list inside validated_data because model Product don't has this field
        validated_data.pop('varieties_list') if "varieties_list" in validated_data else []
        product = Product.objects.create(**validated_data)
        product.save()
        # Get varieties list into the context variable
        c_varieties_list = self.context["varieties_list"]

        if len(c_varieties_list) != 0:
            for i in range(len(c_varieties_list)):
                color = Color.objects.filter(pk=c_varieties_list[i]["color"]).first()
                size = Size.objects.filter(pk=c_varieties_list[i]["size"]).first()
                quantity = c_varieties_list[i]["quantity"]
                picture1 = c_varieties_list[i]["picture1"]
                picture2 = c_varieties_list[i]["picture2"]
                picture3 = c_varieties_list[i]["picture3"]
                picture4 = c_varieties_list[i]["picture4"]
                variety = Variety.objects.create(
                                                   product=product,
                                                   color=color,
                                                   size=size,
                                                   quantity=quantity,
                                                   picture1=picture1,
                                                   picture2=picture2,
                                                   picture3=picture3,
                                                   picture4=picture4,
                                                )
                variety.save()
        return product

    def update(self, instance, validated_data):
        # We remove varieties_list inside validated_data because model Product don't has this field
        validated_data.pop('varieties_list') if "varieties_list" in validated_data else []

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        product = instance
        c_varieties_list = json.loads(self.context["varieties_list"])

        for i in range(len(c_varieties_list)):
            existing_variety = Variety.objects.filter(id=c_varieties_list[i]["id"]).first() \
                if "id" in c_varieties_list[i] else None
            if existing_variety is None:
                variety = Variety.objects.create(**c_varieties_list[i])
                variety.product = product
                variety.save()
            else:
                Variety.objects.filter(id=existing_variety.id).update(**c_varieties_list[i])

        return variety


class AddProductRequestSerializer(serializers.Serializer):
    product = AddProductSerializer(required=True)


class AddProductAPIView(APIView):
    parser_classes = (MultiPartParser, JSONParser)

    @atomic
    def post(self, request, format=None):

        serializer = AddProductRequestSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        size = int(request.data["variety_number"])
        varieties_list = []

        for i in range(size):
            key_color = "varieties_list[" + str(i) + "].color"
            key_size = "varieties_list[" + str(i) + "].size"
            key_quantity = "varieties_list[" + str(i) + "].quantity"
            key_picture1 = "varieties_list[" + str(i) + "].picture1"
            key_picture2 = "varieties_list[" + str(i) + "].picture2"
            key_picture3 = "varieties_list[" + str(i) + "].picture3"
            key_picture4 = "varieties_list[" + str(i) + "].picture4"

            variety = {
                "color": request.data[key_color],
                "size": request.data[key_size],
                "quantity": request.data[key_quantity],
                "picture1": request.data[key_picture1],
                "picture2": request.data[key_picture2],
                "picture3": request.data[key_picture3],
                "picture4": request.data[key_picture4],
            }

            varieties_list.append(variety)
        s = AddProductSerializer(data=getFromRequestData(request.data, "product"),
                                 context={"varieties_list": varieties_list})
        if s.is_valid(raise_exception=True):
            s.save()
            return Response(s.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)