from django.contrib import admin
from .models import UserProfile, Category, Collection, Product, Variety, Color, Size, \
                        Catalog, Cart, CartItem, Group, Article, MainMenuNavPicture, SeoPage, \
                        Banner

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
        Group,
        Article,
        MainMenuNavPicture,
        SeoPage,
        Banner
    ]

for m in all_models:
    admin.site.register(m)