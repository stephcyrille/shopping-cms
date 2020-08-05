# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.apis.utils import get_upload_host
from backend.models import Category


class HomeCategorySerializer(serializers.ModelSerializer):
    picture = serializers.SerializerMethodField()

    def get_picture(self, instance):
        picture = ""
        b = instance

        if b.picture:
            picture = get_upload_host(self.context["request"]) + b.picture.url

        return picture

    class Meta:
        model = Category
        fields = ("title", "slug", "picture")


class HomeCategoryAPIView(APIView):
    queryset = Category.objects.none()
    serializer_class = HomeCategorySerializer

    def get_queryset(self):
        return Category.objects.filter(is_published=True)

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = HomeCategorySerializer(queryset, many=True, context={"request": request})
        return Response(serializer.data)