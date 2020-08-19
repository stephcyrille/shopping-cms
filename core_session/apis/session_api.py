from rest_framework.views import APIView
from rest_framework import serializers, status
from core_session.models import CoreSession
from backend.models import Cart
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


class EditCoreSessionAPIView(APIView):
    """
    A view that can accept POST requests with JSON content.
    """
    def post(self, request, format=None):
        id = request.data["session_id"]
        session = CoreSession.objects.filter(id=id).first()
        if session is not None:
            cart = Cart()
            cart.save()
            session.cart = cart
            session.save()
            return Response(CoreSessionSerializer(session, context={"request": request}).data)