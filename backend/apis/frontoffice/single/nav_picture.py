# -*- coding: utf-8 -*-

from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.apis.utils import get_upload_host
from backend.models import MainMenuNavPicture

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date", "is_published"]


class NavPictureSerializer(serializers.ModelSerializer):

    class Meta:
        model = MainMenuNavPicture
        exclude = exclude_fields


class NavBarPictureAPIView(APIView):
    queryset = MainMenuNavPicture.objects.none()
    serializer_class = NavPictureSerializer

    def get_queryset(self):
        return MainMenuNavPicture.objects.filter(is_published=True).first()

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = NavPictureSerializer(queryset, context={"request": request})
        return Response(serializer.data)