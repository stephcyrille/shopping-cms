from django.urls import path

from backend.apis.frontoffice.single import *


urlpatterns = [
    path('banner/home', HomeBannerAPIView.as_view(), name='front_office_home_banner'),
    path('cover/home', HomeCoverAPIView.as_view(), name='front_office_home_article_cover'),
]