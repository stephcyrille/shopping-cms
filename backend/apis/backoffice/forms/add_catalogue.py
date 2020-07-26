from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Catalog
from rest_framework.parsers import MultiPartParser, JSONParser


class AddCatalogueSerializer(serializers.ModelSerializer):

    class Meta:
        model = Catalog
        fields = ("title", "slug", "picture")


class AddCatalogueView(APIView):
    parser_classes = (MultiPartParser, JSONParser)

    def post(self, request, format=None):
        serializer = AddCatalogueSerializer(data=request.data)
        if serializer.is_valid():
            # serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)