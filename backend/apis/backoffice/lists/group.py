from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Group, Category

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class GroupSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    @staticmethod
    def get_category(instance):
        return instance.category.title

    class Meta:
        model = Group
        exclude = exclude_fields


class GroupListAPIView(ListAPIView):
    queryset = Group.objects.none()
    serializer_class = GroupSerializer

    def get_queryset(self):
        return Group.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = GroupSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))