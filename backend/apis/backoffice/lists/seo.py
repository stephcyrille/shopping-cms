from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import SeoPage

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class SeoPageSerializer(serializers.ModelSerializer):

    class Meta:
        model = SeoPage
        exclude = exclude_fields


class SeoPageListAPIView(ListAPIView):
    queryset = SeoPage.objects.none()
    serializer_class = SeoPageSerializer

    def get_queryset(self):
        return SeoPage.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = SeoPageSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))