import uuid

from django.utils import timezone
from django.contrib.auth.models import User
from django.db import models
from django.urls import reverse
from django.utils.text import slugify

category_upload_path = "categories"
collection_upload_path = "collections"


def product_variety_image_path(instance, filename):
    category = instance.product.category.title
    category_slug = slugify(category)
    return "products/%s/variety/%s" % (category_slug, instance.product.slug)


class UserProfile(models.Model):
    gender = models.CharField(max_length=10)
    user = models.OneToOneField(User, null=True, blank=False, related_name="userprofile", on_delete=models.SET_NULL)
    title = models.CharField(max_length=4, null=True, blank=True)  # Mr, Mrs. Miss.
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    first_name = models.CharField(null=True, blank=True, max_length=100)
    last_name = models.CharField(null=True, blank=True, max_length=100)
    city = models.CharField(null=True, blank=True, max_length=100)
    country = models.CharField(null=True, blank=True, max_length=100)
    address = models.CharField(null=True, blank=True, max_length=250, default='')
    birth_date = models.DateField(null=True, blank=True)
    created_date = models.DateTimeField(blank=True, editable=False, default=timezone.now)
    modified_date = models.DateTimeField(null=True, editable=False, blank=True)

    def save(self, *args, **kwargs):
        """ On save, update timestamps """
        if not self.id:
            self.created_date = timezone.now()
        self.modified_date = timezone.now()
        return super(UserProfile, self).save(*args, **kwargs)

    def __str__(self):
        return '%s - %s' % (self.first_name, self.last_name)


class CoreTrackedModel(models.Model):
    is_archived = models.BooleanField(default=False, blank=True)
    is_published = models.BooleanField(default=True, blank=True)
    created_date = models.DateTimeField(blank=True, editable=False, default=timezone.now)
    modified_date = models.DateTimeField(null=True, editable=False, blank=True)
    created_by = models.ForeignKey(UserProfile, null=True, editable=False, blank=True, on_delete=models.DO_NOTHING,
                                   related_name="+")
    modified_by = models.ForeignKey(UserProfile, null=True, editable=False, blank=True, on_delete=models.DO_NOTHING,
                                    related_name="+")

    def save(self, *args, **kwargs):
        """ On save, update timestamps """
        if not self.id:
            self.created_date = timezone.now()
        self.modified_date = timezone.now()
        return super(CoreTrackedModel, self).save(*args, **kwargs)

    class Meta:
        abstract = True
        ordering = ['-created_date']


class Category(CoreTrackedModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    picture = models.FileField(upload_to=category_upload_path, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_category", kwargs={"slug": self.slug})


class Collection(CoreTrackedModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    picture = models.FileField(upload_to=collection_upload_path, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_collection", kwargs={"slug": self.slug})


class Group(CoreTrackedModel):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("single_group", kwargs={"slug": self.slug})


class Catalog(CoreTrackedModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_catalog", kwargs={"slug": self.slug})


class Product(CoreTrackedModel):
    ref = models.CharField(max_length=12)
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    price = models.IntegerField()
    description = models.TextField(default='')
    category = models.ForeignKey(Category, blank=False, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, blank=False, null=True, on_delete=models.CASCADE)
    collection = models.ForeignKey(Collection, blank=True, null=True, on_delete=models.CASCADE)
    catalog = models.ForeignKey(Catalog, blank=True, null=True, on_delete=models.CASCADE)
    material = models.CharField(max_length=150, null=True, blank=True)  # Material in which the product is made
    is_feature = models.BooleanField(default=False)
    is_discount = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_product", kwargs={"slug": self.slug})


class Color(CoreTrackedModel):
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Variety(CoreTrackedModel):
    product = models.ForeignKey(Product, blank=False, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, blank=True, null=True, on_delete=models.CASCADE)
    size = models.ForeignKey("Size", blank=True, null=True, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    picture1 = models.FileField(upload_to=product_variety_image_path, null=True, blank=True)
    picture2 = models.FileField(upload_to=product_variety_image_path, null=True, blank=True)
    picture3 = models.FileField(upload_to=product_variety_image_path, null=True, blank=True)
    picture4 = models.FileField(upload_to=product_variety_image_path, null=True, blank=True)

    def __str__(self):
        return '%s - %s' % (self.product.title, self.color.name)


class Size(CoreTrackedModel):
    category = models.ForeignKey(Category, blank=False, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    size_system = models.CharField(max_length=20, default='')
    quantity = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Cart(CoreTrackedModel):
    ref = models.CharField(max_length=10, null=True, blank=True)
    total = models.IntegerField(default=0)
    status = models.CharField(max_length=25, default='Open')  # Open, Canceled, close

    def __str__(self):
        return "Cart n° %s" % self.ref

    def save(self, *args, **kwargs):
        """ On save, update timestamps """
        if not self.id:
            self.ref = str(uuid.uuid4()).split('-')[0]
        return super(Cart, self).save(*args, **kwargs)


class CartItem(CoreTrackedModel):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, null=True, blank=True)
    variety = models.ForeignKey(Variety, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    line_total = models.IntegerField(default=1)

    def __str__(self):
        return 'Cart %s - %s (%s)' % (str(self.cart.ref), self.variety.product.title, self.variety.color.name)

