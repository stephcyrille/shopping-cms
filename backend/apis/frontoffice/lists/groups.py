# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.models import Group

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date", "is_published"]


class GroupSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    @staticmethod
    def get_category(instance):
        return instance.category.title

    class Meta:
        model = Group
        exclude = exclude_fields


class GroupListByCategoryAPIView(APIView):
    queryset = Group.objects.none()
    serializer_class = GroupSerializer

    def get_queryset(self, category):
        if 'vetements' == category or 'clothings' == category :
            return Group.objects.filter(category__slug=category)
        elif 'chaussures' == category or 'shoes' == category :
            return Group.objects.filter(category__slug=category)
        elif 'sacs' == category or 'bags' == category :
            return Group.objects.filter(category__slug=category)
        elif 'accessoires' == category or 'accessories' == category :
            return Group.objects.filter(category__slug=category)
        elif 'bijoux' == category or 'jewelry' == category :
            return Group.objects.filter(category__slug=category)
        elif 'lingeries' == category:
            return Group.objects.filter(category__slug=category)
        elif 'beautes' == category or 'beauties' == category :
            return Group.objects.filter(category__slug=category)
        else:
            return Group.objects.none()

    def get(self, request, category):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset(category)
        serializer = GroupSerializer(queryset, many=True, context={"request": request})
        return Response(serializer.data)
