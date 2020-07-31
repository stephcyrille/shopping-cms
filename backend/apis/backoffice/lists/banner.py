from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Banner

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class BannerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Banner
        exclude = exclude_fields


class BannerListAPIView(ListAPIView):
    queryset = Banner.objects.none()
    serializer_class = BannerSerializer

    def get_queryset(self):
        return Banner.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = BannerSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))