from rest_framework.views import APIView
from rest_framework import serializers, status
from core_session.models import CoreSession
from rest_framework.response import Response


class CoreSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoreSession
        fields = "__all__"


class CoreSessionAPIView(APIView):
    """
    A view that can accept POST requests with JSON content.
    """
    def post(self, request, format=None):
        serializer = CoreSessionSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data)