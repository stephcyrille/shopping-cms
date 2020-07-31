from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Category

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        exclude = exclude_fields


class CategoryListAPIView(ListAPIView):
    queryset = Category.objects.none()
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = CategorySerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))