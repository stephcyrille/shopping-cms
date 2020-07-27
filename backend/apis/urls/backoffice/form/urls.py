from django.urls import path, include

from backend.apis.backoffice.forms import *


urlpatterns = [
    path('collection/add', AddCollectionView.as_view(), name='add_collection'),
    path('category/add', AddCategoryView.as_view(), name='add_category'),
    path('catalog/add', AddCatalogueView.as_view(), name='add_catalog'),
    path('group/add', AddGroupView.as_view(), name='add_group'),
    path('size/add', AddSizeView.as_view(), name='add_size'),
    path('color/add', AddColorView.as_view(), name='add_color'),
]
