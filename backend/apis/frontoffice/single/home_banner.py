# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.apis.utils import get_upload_host
from backend.models import Banner


class HomeBannerSerializer(serializers.ModelSerializer):
    picture = serializers.SerializerMethodField()

    def get_picture(self, instance):
        picture = ""
        b = instance

        if b.picture:
            picture = get_upload_host(self.context["request"]) + b.picture.url

        return picture

    class Meta:
        model = Banner
        fields = ("title", "subTitle", "linkText", "linkUrl", "picture")


class HomeBannerAPIView(APIView):
    queryset = Banner.objects.none()
    serializer_class = HomeBannerSerializer

    def get_queryset(self):
        return Banner.objects.filter(is_home=True, is_published=True).first()

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = HomeBannerSerializer(queryset, context={"request": request})
        return Response(serializer.data)