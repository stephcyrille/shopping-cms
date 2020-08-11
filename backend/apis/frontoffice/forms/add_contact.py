# -*- coding: utf-8 -*-

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Contact
from rest_framework.parsers import JSONParser


class AddContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = "__all__"


class AddContactView(APIView):
    parser_classes = (JSONParser,)

    def post(self, request):
        serializer = AddContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)