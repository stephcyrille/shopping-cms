# -*- coding: utf-8 -*-

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import SeoPage
from rest_framework.parsers import MultiPartParser, JSONParser


class AddSEOSerializer(serializers.ModelSerializer):

    class Meta:
        model = SeoPage
        fields = "__all__"


class AddSEOView(APIView):
    parser_classes = (MultiPartParser, JSONParser)

    def post(self, request, format=None):
        serializer = AddSEOSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)