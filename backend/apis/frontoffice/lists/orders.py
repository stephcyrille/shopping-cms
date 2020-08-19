# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.models import Order, CartItem

exclude_fields = ["is_archived", "created_by", "modified_by", "modified_date", "is_published"]


class HomeOrderSerializer(serializers.ModelSerializer):
    contact = serializers.SerializerMethodField()
    products = serializers.SerializerMethodField()

    def get_contact(self, instance):
        contact = ''
        if instance.contact:
            contact = instance.contact.address
        return contact

    def get_products(self, instance):
        cart_items = []
        cart = instance.cart
        if cart is not None:
            ci = CartItem.objects.filter(cart=cart)

            for i in ci:
                product = {
                    "ref": i.variety.product.ref,
                    "title": i.variety.product.title,
                    "price": i.variety.product.price,
                    "quantity": i.quantity,
                }
                cart_items.append(product)
        return cart_items

    class Meta:
        model = Order
        exclude = exclude_fields


class ContactListAPIView(APIView):
    queryset = Order.objects.none()
    serializer_class = HomeOrderSerializer

    def get_queryset(self, request):
        query_string = request.GET.get('user')
        return Order.objects.filter(is_archived=False, user=query_string)

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset(request)
        serializer = HomeOrderSerializer(queryset, many=True, context={"request": request})
        return Response(serializer.data)
