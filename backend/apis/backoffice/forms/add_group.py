from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import Group
from rest_framework.parsers import JSONParser


class AddGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ("title", "slug", "category")


class AddGroupView(APIView):
    parser_classes = (JSONParser,)

    def post(self, request, format=None):
        serializer = AddGroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)