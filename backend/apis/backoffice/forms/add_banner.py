# -*- coding: utf-8 -*-

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Banner
from rest_framework.parsers import MultiPartParser, JSONParser


class AddBannerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Banner
        fields = "__all__"


class AddBannerView(APIView):
    parser_classes = (MultiPartParser, JSONParser)

    def post(self, request, format=None):
        serializer = AddBannerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)