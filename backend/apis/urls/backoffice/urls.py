from django.urls import path, include


urlpatterns = [
    path('forms/', include('backend.apis.urls.backoffice.form.urls')),
    path('lists/', include('backend.apis.urls.backoffice.list.urls')),
]

