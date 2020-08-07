from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers, status

from backend.apis.utils import get_upload_host
from backend.models import Cart, CartItem

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date", "is_published"]


class CartSerializer(serializers.ModelSerializer):
    cart_items = serializers.SerializerMethodField()
    cart_price = serializers.SerializerMethodField()
    cart_quantity = serializers.SerializerMethodField()
    delivery_price = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        exclude = exclude_fields

    def get_cart_items(self, instance):
        items = []
        cart_items = CartItem.objects.filter(cart=instance, is_archived=False)
        for i in cart_items:
            item_product_pictures = []
            if i.variety.picture1:
                item_product_pictures.append(get_upload_host(self.context["request"]) + i.variety.picture1.url)
            if i.variety.picture2:
                item_product_pictures.append(get_upload_host(self.context["request"]) + i.variety.picture2.url)
            if i.variety.picture3:
                item_product_pictures.append(get_upload_host(self.context["request"]) + i.variety.picture3.url)
            if i.variety.picture4:
                item_product_pictures.append(get_upload_host(self.context["request"]) + i.variety.picture4.url)

            item = {
                "id": i.id,
                "slug": i.variety.product.slug,
                "title": "%s - %s" % (i.variety.product.title, i.variety.color.title),
                "description": i.variety.product.description,
                "price": i.variety.product.price,
                "color": i.variety.color.title,
                "size": i.variety.size.name,
                "selected_quantity": i.quantity,
                "line_total": (i.variety.product.price * i.quantity),
                "pictures": item_product_pictures
            }
            items.append(item)
        return items

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

    @staticmethod
    def get_delivery_price(instance):
        price = 2000
        return price


class CartAPIView(APIView):
    # permission_classes = (AllowAny,)

    def get(self, request, cart_id):
        cart = Cart.objects.get(pk=cart_id)
        return Response(CartSerializer(cart, context={"request": request}).data)


class DeleteCartItemAPIView(APIView):
    # permission_classes = (AllowAny,)

    def post(self, request):
        data = request.data['body']

        cart_id = data["cart_id"]
        cart_item_id = data["cart_item_id"]

        try:
            cart_item = CartItem.objects.get(pk=cart_item_id)
            cart_item.is_archived = True
            try:
                # Update cart total quantity
                cart = Cart.objects.get(pk=cart_id)
                new_total = cart.total - cart_item.line_total
                cart.total = new_total
                cart.save()
                cart_item.save()
                return Response(CartSerializer(cart, context={"request": request}).data)
            except:
                response = {
                    "message": "Erreur, panier introuvable"
                }
                return Response(response, status=status.HTTP_404_NOT_FOUND)
        except:
            response = {
                "message": "Erreur, ressource introuvable"
            }
            return Response(response, status=status.HTTP_404_NOT_FOUND)
