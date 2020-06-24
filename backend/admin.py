from django.contrib import admin
from .models import UserProfile, Category, Collection, Product, Variety, Color, Size, Catalog, Cart, CartItem, Group

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
        Cart,
        Group
    ]

for m in all_models:
    admin.site.register(m)