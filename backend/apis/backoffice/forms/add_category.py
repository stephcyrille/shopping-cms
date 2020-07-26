from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Category
from rest_framework.parsers import MultiPartParser, JSONParser


class AddCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ("title", "slug", "picture")


class AddCategoryView(APIView):
    parser_classes = (MultiPartParser, JSONParser)

    def post(self, request, format=None):
        serializer = AddCategorySerializer(data=request.data)
        if serializer.is_valid():
            # serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)