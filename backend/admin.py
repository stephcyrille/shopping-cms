from django.contrib import admin
from .models import UserProfile, Category, Collection, Product, Variety, Color, Size, Catalog

all_models = [
        UserProfile,
        Category,
        Collection,
        Product,
        Variety,
        Color,
        Size,
        Catalog
    ]

for m in all_models:
    admin.site.register(m)