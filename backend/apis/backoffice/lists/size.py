from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Size

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class SizeSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    @staticmethod
    def get_category(instance):
        return instance.category.title

    class Meta:
        model = Size
        exclude = exclude_fields


class SizeListAPIView(ListAPIView):
    queryset = Size.objects.none()
    serializer_class = SizeSerializer

    def get_queryset(self):
        return Size.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = SizeSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))