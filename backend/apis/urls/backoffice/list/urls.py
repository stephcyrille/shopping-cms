from django.urls import path, include

from backend.apis.backoffice.lists import *


urlpatterns = [
    path('catalog', CatalogListAPIView.as_view(), name='back_office_catalog_list'),
    path('category', CategoryListAPIView.as_view(), name='back_office_category_list'),
    path('collection', CollectionListAPIView.as_view(), name='back_office_collection_list'),
    path('group', GroupListAPIView.as_view(), name='back_office_group_list'),
    path('size', SizeListAPIView.as_view(), name='back_office_size_list'),
    path('color', ColorListAPIView.as_view(), name='back_office_color_list'),
    path('product', ProductListAPIView.as_view(), name='back_office_product_list'),
    path('article', ArticleListAPIView.as_view(), name='back_office_article_list'),
    path('mainmenupic', MainMenuNavPictureListAPIView.as_view(), name='back_office_mainnavpic_list'),
    path('seo', SeoPageListAPIView.as_view(), name='back_office_seo_list'),
    path('banner', BannerListAPIView.as_view(), name='back_office_banner_list'),
]
