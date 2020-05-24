from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import CartItem, Cart, Variety

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
        data = serializer.data
        try:
            cart = Cart.objects.get(id=data["cart"])
            variety = Variety.objects.get(id=data["variety"])
            # Check if variety chosen have already been add to a cart item
            cart_items_by_variety = CartItem.objects.filter(variety=variety, cart=cart)
            if not cart_items_by_variety:
                cart_item = CartItem(cart=cart, variety=variety, quantity=data['quantity'],
                                     line_total=data['line_total'])
                cart_item.save()
                return Response(serializer.data)
            else:
                c_item = cart_items_by_variety.first()
                c_item.quantity = c_item.quantity + data["quantity"]
                c_item.save()
                response = {
                    "cart": c_item.cart.id,
                    "variety": c_item.variety.id,
                    "quantity": c_item.quantity,
                    "line_total": c_item.line_total
                }
                return Response(response, status=status.HTTP_202_ACCEPTED)
        except Exception as e:
            response = {
                "error": e.__str__()
            }
            return Response(response, status=status.HTTP_404_NOT_FOUND)
