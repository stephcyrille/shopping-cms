from django.urls import path
from django.conf.urls import url

from core_session.apis import CoreSessionAPIView, GetSessionCartAPIView
from .apis.frontoffice import CategoryAPIView, ProductsAPIView, ProductSingleAPIView, CartAPIView, DeleteCartItemAPIView
from .apis.frontoffice.forms import AddCartItemAPIView

urlpatterns = [
    path('core/session/create', CoreSessionAPIView.as_view(), name='create_session'),
    path('core/session/carts/update/<int:id>/', GetSessionCartAPIView.as_view(), name='update_session_cart'),


    path('categories/', CategoryAPIView.as_view(), name='categories'),

    path('products/', ProductsAPIView.as_view(), name='products'),
    path('products/<str:slug>/', ProductSingleAPIView.as_view(), name='single_product'),

    # forms
    path('cart/add_item/', AddCartItemAPIView.as_view(), name='add_item_to_cart'),
    path('cart/item/delete/', DeleteCartItemAPIView.as_view(), name='delete_cart_item'),

    # api
    path('cart/<int:cart_id>/', CartAPIView.as_view(), name='show_cart'),
]
