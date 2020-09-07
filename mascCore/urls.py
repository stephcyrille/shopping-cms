"""
    mascCore URL Configuration
"""

from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import RedirectView


urlpatterns = [
    url(r'^$', RedirectView.as_view(url='shop/', permanent=True)),
    path('admin/', admin.site.urls),
    path('apis/', include('backend.urls')),
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('dashboard/', include('frontend.urls_dashboard')),
    path('shop/', include('frontend.urls_client')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)