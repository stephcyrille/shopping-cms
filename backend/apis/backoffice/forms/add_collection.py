from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Collection
from rest_framework.parsers import MultiPartParser, JSONParser


class AddCollectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collection
        fields = ("title", "slug", "picture")


class AddCollectionView(APIView):
    parser_classes = (MultiPartParser, JSONParser)

    def post(self, request, format=None):
        serializer = AddCollectionSerializer(data=request.data)
        if serializer.is_valid():
            # serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)