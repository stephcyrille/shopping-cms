from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers
from backend.apis.utils import get_upload_host
from backend.models import Product, Variety, Color, Size

# from rest_framework.permissions import IsAuthenticated

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date", "is_published"]
exclude_fields_variety = ["is_archived", "created_by", "modified_by", "created_date", "modified_date", "picture1",
                          "picture2", "picture3", "picture4", "product", "is_published"]


class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        exclude = exclude_fields


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ["id", "name", "size_system", "quantity"]


class VarietySerializer(serializers.ModelSerializer):
    pictures = serializers.SerializerMethodField()
    color = ColorSerializer()
    size = SizeSerializer()

    def get_pictures(self, instance):
        pictures = []
        variety = instance
        if variety.picture1:
            pictures.append(get_upload_host(self.context["request"]) + variety.picture1.url)
        if variety.picture2:
            pictures.append(get_upload_host(self.context["request"]) + variety.picture2.url)
        if variety.picture3:
            pictures.append(get_upload_host(self.context["request"]) + variety.picture3.url)
        if variety.picture4:
            pictures.append(get_upload_host(self.context["request"]) + variety.picture4.url)

        # if category.picture:
        #     picture = get_upload_host(self.context["request"]) + category.picture1.url
        return pictures

    class Meta:
        model = Variety
        exclude = exclude_fields_variety


class ProductHomeSerializer(serializers.ModelSerializer):
    product_url = serializers.SerializerMethodField()
    varieties = serializers.SerializerMethodField()

    def get_product_url(self, instance):
        product_url = get_upload_host(self.context["request"]) + instance.get_absolute_url()
        return product_url

    def get_varieties(self, instance):
        varieties = Variety.objects.filter(product=instance)
        return VarietySerializer(varieties, many=True, context={"request": self.context["request"]}).data

    class Meta:
        model = Product
        exclude = exclude_fields


class ProductsAPIView(APIView):
    # permission_classes = (AllowAny,)

    @staticmethod
    def get(request, format=None):
        products = Product.objects.all()
        return Response(ProductHomeSerializer(products, many=True, context={"request": request}).data)


class ProductSingleAPIView(APIView):
    # permission_classes = (AllowAny,)

    def get(self, request, slug):
        product = Product.objects.get(slug=slug)
        return Response(ProductHomeSerializer(product, context={"request": request}).data)
