# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from backend.models import Contact

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date", "is_published"]


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        exclude = exclude_fields


class ContactListAPIView(APIView):
    queryset = Contact.objects.none()
    serializer_class = ContactSerializer

    def get_queryset(self):
        return Contact.objects.filter(is_archived=False)

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = ContactSerializer(queryset, many=True, context={"request": request})
        return Response(serializer.data)
