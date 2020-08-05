from django.urls import path, include


urlpatterns = [
    path('lists/', include('backend.apis.urls.frontoffice.lists.urls')),
    path('single/', include('backend.apis.urls.frontoffice.single.urls')),
]

