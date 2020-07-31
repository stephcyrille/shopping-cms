from rest_framework.generics import ListAPIView
from rest_condition import Or
from rest_framework import serializers
from backend.models import Article

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        exclude = exclude_fields


class ArticleListAPIView(ListAPIView):
    queryset = Article.objects.none()
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = ArticleSerializer(queryset, many=True)
        return self.get_paginated_response(self.paginate_queryset(serializer.data))