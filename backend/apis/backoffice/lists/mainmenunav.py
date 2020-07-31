from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import MainMenuNavPicture

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class MainMenuNavPictureSerializer(serializers.ModelSerializer):

    class Meta:
        model = MainMenuNavPicture
        exclude = exclude_fields


class MainMenuNavPictureListAPIView(ListAPIView):
    queryset = MainMenuNavPicture.objects.none()
    serializer_class = MainMenuNavPictureSerializer

    def get_queryset(self):
        return MainMenuNavPicture.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = MainMenuNavPictureSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))