from django.urls import path

from backend.apis.frontoffice.lists import *


urlpatterns = [
    path('products/trending', TrendingProductListAPIView.as_view(),
         name='front_office_trending_product_list'),
    path('products/<str:catalog>/<str:category>', ProductListByCatalogAPIView.as_view(),
         name='front_office_trending_product_list_by_catalog'),
    path('groups/<str:category>', GroupListByCategoryAPIView.as_view(), name='front_office_group_by_category'),
    path('products/flash_sale', ProductFlashSaleAPIView.as_view(), name='front_office_product_flash_sale'),
    path('categories', HomeCategoryAPIView.as_view(), name='front_office_category_list'),
    path('contacts', ContactListAPIView.as_view(), name='front_office_contact_list'),
    path('orders', ContactListAPIView.as_view(), name='front_office_orders_list'),
]