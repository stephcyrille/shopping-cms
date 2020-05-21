from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import serializers
from backend.apis.utils import get_upload_host
from backend.models import Category

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class CategoryHomeSerializer(serializers.ModelSerializer):

    def get_picture(self, instance):
        picture = ""
        category = instance

        if category.picture:
            picture = get_upload_host(self.context["request"]) + category.picture1.url
        return picture

    class Meta:
        model = Category
        exclude = exclude_fields


class CategoryAPIView(APIView):
    #permission_classes = (AllowAny,)

    def get(self, request, format=None):
        categories = Category.objects.all()
        return Response(CategoryHomeSerializer(categories, many=True, context={"request":request}).data)