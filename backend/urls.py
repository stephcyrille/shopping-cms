from django.urls import path, include

from core_session.apis import CoreSessionAPIView, GetSessionCartAPIView
from .apis.frontoffice import CategoryAPIView, ProductsAPIView, ProductSingleAPIView, \
    CartAPIView, DeleteCartItemAPIView, GroupAPIView, GroupSingleAPIView
from .apis.frontoffice.forms import AddCartItemAPIView

urlpatterns = [
    path('core/', include('backend.apis.urls.backoffice.urls')),

    # TODO Redefine all these route with the new synthax
    path('core/session/create', CoreSessionAPIView.as_view(), name='create_session'),
    path('core/session/carts/update/<int:id>/', GetSessionCartAPIView.as_view(), name='update_session_cart'),

    path('categories/', CategoryAPIView.as_view(), name='categories'),

    path('products/', ProductsAPIView.as_view(), name='products'),
    path('products/<str:slug>/', ProductSingleAPIView.as_view(), name='single_product'),

    path('products/groups/', GroupAPIView.as_view(), name='all_groups'),
    path('products/group/<str:slug>/', GroupSingleAPIView.as_view(), name='single_group'),

    # forms
    path('cart/add_item/', AddCartItemAPIView.as_view(), name='add_item_to_cart'),
    path('cart/item/delete/', DeleteCartItemAPIView.as_view(), name='delete_cart_item'),

    # api
    path('cart/<int:cart_id>/', CartAPIView.as_view(), name='show_cart'),
]
