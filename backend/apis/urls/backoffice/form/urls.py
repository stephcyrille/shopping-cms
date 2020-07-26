from django.urls import path, include

from backend.apis.backoffice.forms import *


urlpatterns = [
    path('collection/add', AddCollectionView.as_view(), name='add_collection'),
    path('category/add', AddCategoryView.as_view(), name='add_category'),
    path('catalog/add', AddCatalogueView.as_view(), name='add_catalog'),
]
