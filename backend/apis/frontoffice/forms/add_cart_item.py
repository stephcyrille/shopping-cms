from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import CartItem, Cart

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class CartItemPostSerializer(serializers.ModelSerializer):
    quantity = serializers.IntegerField(required=True)
    line_total = serializers.IntegerField(required=True)

    class Meta:
        model = CartItem
        exclude = exclude_fields


class AddCartItemAPIView(APIView):

    def post(self, request, format=None):
        serializer = CartItemPostSerializer(data=request.data['data'])
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        #serializer.save()
        return Response(serializer.data)