from django.urls import path, include

from backend.apis.backoffice.forms import *


urlpatterns = [
    path('collection/add', AddCollectionView.as_view(), name='add_collection'),
    path('category/add', AddCategoryView.as_view(), name='add_category'),
    path('catalog/add', AddCatalogueView.as_view(), name='add_catalog'),
    path('group/add', AddGroupView.as_view(), name='add_group'),
    path('size/add', AddSizeView.as_view(), name='add_size'),
    path('color/add', AddColorView.as_view(), name='add_color'),
    path('product/add', AddProductAPIView.as_view(), name='add_product'),
    path('article/add', AddArticleView.as_view(), name='add_article'),
    path('mainmenupicture/add', AddMainMenuNavPictureView.as_view(), name='add_mainmenunavpic'),
    path('seo/add', AddSEOView.as_view(), name='add_seo'),
    path('banner/add', AddBannerView.as_view(), name='add_banner'),
]
