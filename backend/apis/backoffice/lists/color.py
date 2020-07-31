from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Color

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Color
        exclude = exclude_fields


class ColorListAPIView(ListAPIView):
    queryset = Color.objects.none()
    serializer_class = ColorSerializer

    def get_queryset(self):
        return Color.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = ColorSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))