# -*- coding: utf-8 -*-

from datetime import datetime, timedelta

from rest_framework.generics import ListAPIView
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView

from backend.apis.utils import get_upload_host
from backend.models import Product, Variety

exclude_fields = ["is_archived", "created_by", "modified_by", "created_date", "modified_date"]
one_week_ago = datetime.today() - timedelta(days=7)
one_month_ago = datetime.today() - timedelta(days=30)


class VarietySerializer(serializers.ModelSerializer):
    pictures = serializers.SerializerMethodField()

    def get_pictures(self, instance):
        """
        Get at max 30 pictures for all services composing this pack
        """
        pics = []
        # si le queryset services_of_pack est grand
        v = instance

        if v.picture1:
            pics.append(get_upload_host(self.context["request"]) + v.picture1.url)
        if v.picture2:
            pics.append(get_upload_host(self.context["request"]) + v.picture2.url)
        if v.picture3:
            pics.append(get_upload_host(self.context["request"]) + v.picture3.url)
        if v.picture4:
            pics.append(get_upload_host(self.context["request"]) + v.picture4.url)

        return pics

    class Meta:
        model = Variety
        fields = ("quantity", "pictures")


class TrendingProductSerializer(serializers.ModelSerializer):
    product_url = serializers.SerializerMethodField()
    pictures = serializers.SerializerMethodField()

    def get_product_url(self, instance):
        product_url = get_upload_host(self.context["request"]) + instance.get_absolute_url()
        return product_url

    def get_pictures(self, instance):
        """
        Get at max 30 pictures for all services composing this pack
        """
        pics = []
        # si le queryset services_of_pack est grand
        v = Variety.objects.filter(product=instance).first()

        if v is not None:
            if v.picture1:
                pics.append(get_upload_host(self.context["request"]) + v.picture1.url)
            if v.picture2:
                pics.append(get_upload_host(self.context["request"]) + v.picture2.url)
            if v.picture3:
                pics.append(get_upload_host(self.context["request"]) + v.picture3.url)
            if v.picture4:
                pics.append(get_upload_host(self.context["request"]) + v.picture4.url)

        return pics

    class Meta:
        model = Product
        fields = ["id", "title", "slug", "price", "pictures", "product_url"]


class TrendingProductListAPIView(ListAPIView):
    queryset = Product.objects.none()
    serializer_class = TrendingProductSerializer

    def get_queryset(self):
        return Product.objects.filter(is_archived=False)

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = TrendingProductSerializer(queryset, many=True, context={"request": request})
        return self.get_paginated_response(self.paginate_queryset(serializer.data))


class ProductListByCatalogAPIView(APIView):
    queryset = Product.objects.none()
    serializer_class = TrendingProductSerializer

    def get_queryset(self, catalog, category, query):
        if 'femme' == catalog and 'trending' == category:
            if 'month' == query:
                return Product.objects.filter(catalog__slug=catalog, trending=True).filter(created_date__gte=one_month_ago)
            elif 'weekend' == query:
                return Product.objects.filter(catalog__slug=catalog, trending=True).filter(created_date__gte=one_week_ago)
            elif 'summer_collection' == query:
                return Product.objects.filter(catalog__slug=catalog, collection__title=query, trending=True)
            elif 'best_sales' == query:
                # TODO create query for searching the most sold product in the catalog
                return Product.objects.filter(catalog__slug=catalog, trending=True)
            else:
                return Product.objects.none()

        # All new products newly created
        # TODO Write a specific filter for this list
        elif 'femme' == catalog and 'news-products' == category:
            return Product.objects.filter(catalog__slug=catalog, trending=True)

        elif 'femme' == catalog and ('clothings' == category or 'vetements' == category ):
            return Product.objects.filter(catalog__slug=catalog, category__slug=category)

        elif 'femme' == catalog and ('shoes' == category or 'chaussures' == category ):
            return Product.objects.filter(catalog__slug=catalog, category__slug=category)

        elif 'femme' == catalog and ('bags' == category or 'sacs' == category ):
            return Product.objects.filter(catalog__slug=catalog, category__slug=category)

        elif 'femme' == catalog and ('accessories' == category or 'accessoires' == category ):
            return Product.objects.filter(catalog__slug=catalog, category__slug=category)

        elif 'femme' == catalog and ('jewelry' == category or 'bijoux' == category ):
            return Product.objects.filter(catalog__slug=catalog, category__slug=category)

        elif 'femme' == catalog and 'lingeries' == category:
            return Product.objects.filter(catalog__slug=catalog, category__slug=category)

        elif 'femme' == catalog and ('beauties' == category or 'beautes' == category):
            return Product.objects.filter(catalog__slug=catalog, category__slug=category)

        else:
            return Product.objects.none()

    def get(self, request, catalog, category):
        query_string = request.GET.get('sort')
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset(catalog, category, query_string)
        serializer = TrendingProductSerializer(queryset, many=True, context={"request": request})
        return Response(serializer.data)