from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Product

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class ProductSerializer(serializers.ModelSerializer):
    varieties = serializers.SerializerMethodField()

    def get_varieties(self, instance):
        return instance.product_variety.filter(is_archived=False).count()

    class Meta:
        model = Product
        exclude = exclude_fields


class ProductListAPIView(ListAPIView):
    queryset = Product.objects.none()
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = ProductSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))