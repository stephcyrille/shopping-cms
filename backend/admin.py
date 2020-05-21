from django.contrib import admin
from .models import UserProfile, Category, Collection, Product, Variety, Color, Size, Catalog, Cart, CartItem

all_models = [
        UserProfile,
        Category,
        Collection,
        Product,
        Variety,
        Color,
        Size,
        Catalog,
        CartItem,
        Cart
    ]

for m in all_models:
    admin.site.register(m)