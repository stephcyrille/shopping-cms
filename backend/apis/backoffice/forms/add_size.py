from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Size
from rest_framework.parsers import MultiPartParser, JSONParser


class AddSizeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Size
        fields = ("category", "name", "size_system", "quantity")


class AddSizeView(APIView):
    parser_classes = (JSONParser,)

    def post(self, request, format=None):
        serializer = AddSizeSerializer(data=request.data)
        if serializer.is_valid():
            # serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)