from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Collection

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class CollectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collection
        exclude = exclude_fields


class CollectionListAPIView(ListAPIView):
    queryset = Collection.objects.none()
    serializer_class = CollectionSerializer

    def get_queryset(self):
        return Collection.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = CollectionSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))