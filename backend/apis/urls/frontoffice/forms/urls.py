from django.urls import path

from backend.apis.frontoffice.forms import *


urlpatterns = [
    path('contact/add', AddContactView.as_view(), name='front_office_contact_add'),
    path('order/add', AddOrderView.as_view(), name='front_office_order_add'),
]