from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status
from backend.models import CartItem, Cart, Product

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class CartSessionSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()
    cart_price = serializers.SerializerMethodField()
    cart_quantity = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        exclude = exclude_fields

    @staticmethod
    def get_products(instance):
        products = []
        cart_items = CartItem.objects.filter(cart=instance, is_archived=False)
        for i in cart_items:
            product = {
                "id": i.variety.product.id,
                "slug": i.variety.product.slug,
                "title": i.variety.product.title,
                "price": i.variety.product.price,
                "color": i.variety.color.name,
                "selected_quantity": i.quantity
            }
            products.append(product)
        return products

    @staticmethod
    def get_cart_price(instance):
        total_price = 0
        cart_items = CartItem.objects.filter(cart=instance, is_archived=False)
        for i in cart_items:
            quantity = i.quantity
            product_price = i.variety.product.price
            line_total = product_price * quantity
            total_price = total_price + line_total
        instance.total = total_price
        instance.save()
        return total_price

    @staticmethod
    def get_cart_quantity(instance):
        total_quantity = 0
        cart_items = CartItem.objects.filter(cart=instance, is_archived=False)
        for i in cart_items:
            quantity = i.quantity
            total_quantity = total_quantity + quantity
        return total_quantity


class GetSessionCartAPIView(APIView):

    @staticmethod
    def get(request, id):
        cart = Cart.objects.get(id=id)
        return Response(CartSessionSerializer(cart, context={"request": request}).data)