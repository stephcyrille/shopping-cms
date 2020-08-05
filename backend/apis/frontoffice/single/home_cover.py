# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.apis.utils import get_upload_host
from backend.models import Article


class HomeCoverSerializer(serializers.ModelSerializer):
    coverImage = serializers.SerializerMethodField()
    articleImage = serializers.SerializerMethodField()

    def get_coverImage(self, instance):
        picture = ""
        b = instance

        if b.coverImage:
            picture = get_upload_host(self.context["request"]) + b.coverImage.url

        return picture

    def get_articleImage(self, instance):
        picture = ""
        b = instance

        if b.articleImage:
            picture = get_upload_host(self.context["request"]) + b.articleImage.url

        return picture

    class Meta:
        model = Article
        fields = ("title", "slug", "coverImage", "articleImage")


class HomeCoverAPIView(APIView):
    queryset = Article.objects.none()
    serializer_class = HomeCoverSerializer

    def get_queryset(self):
        return Article.objects.filter(is_home=True, is_published=True).first()

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = HomeCoverSerializer(queryset, context={"request": request})
        return Response(serializer.data)