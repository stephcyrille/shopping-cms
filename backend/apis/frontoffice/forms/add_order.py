# -*- coding: utf-8 -*-

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Order
from rest_framework.parsers import JSONParser


class AddOrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = "__all__"


class AddOrderView(APIView):
    parser_classes = (JSONParser,)

    def post(self, request):
        serializer = AddOrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)