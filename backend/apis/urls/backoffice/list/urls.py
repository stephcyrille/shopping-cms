from django.urls import path, include

from backend.apis.backoffice.lists import *


urlpatterns = [
    path('catalog', CatalogListAPIView.as_view(), name='back_office_catalog_list'),
]
