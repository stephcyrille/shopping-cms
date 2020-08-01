from django.urls import path

from backend.apis.frontoffice.lists import *


urlpatterns = [
    path('products/trending', TrendingProductListAPIView.as_view(), name='front_office_trending_product_list'),
    path('products/<str:catalog>/<str:category>', TrendingProductListByCatalogAPIView.as_view(), name='front_office_trending_product_list_by_catalog'),
]