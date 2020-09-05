import uuid

from django.utils import timezone
from django.contrib.auth.models import User
from django.db import models
from django.urls import reverse
from django.utils.text import slugify

catalog_upload_path = "catalogs"
category_upload_path = "categories"
collection_upload_path = "collections"
color_motif_upload_path = "motifs"
main_menu_pic_upload_path = "mainmenunav"
seo_pic_upload_path = "seo"
banner_pic_upload_path = "banner"


def product_variety_image_path(instance, filename):
    category = instance.product.category.title
    category_slug = slugify(category)
    return "products/%s/variety/%s" % (category_slug, instance.product.slug)


def articles_image_path(instance, filename):
    title = instance.title
    author = slugify(title)
    return "articles/%s/%s" % (title, author)


class UserProfile(models.Model):
    gender = models.CharField(max_length=10)
    user = models.OneToOneField(User, null=True, blank=False, related_name="userprofile", on_delete=models.SET_NULL)
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


class Catalog(CoreTrackedModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    picture = models.FileField(upload_to=catalog_upload_path, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_catalog", kwargs={"slug": self.slug})


class Collection(CoreTrackedModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    picture = models.FileField(upload_to=collection_upload_path, null=True)
    # This help to know if the collection will be present on the home page, beside mag home cover
    is_home = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_collection", kwargs={"slug": self.slug})


# Clothing, Bag, Jewel, Accessory, etc.
class Category(CoreTrackedModel):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    picture = models.FileField(upload_to=category_upload_path, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_category", kwargs={"slug": self.slug})


# Dress, skirt, Polo, shirt, Jeans, etc.
class Group(CoreTrackedModel):
    title = models.CharField(max_length=100)
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_group", kwargs={"slug": self.slug})


class Product(CoreTrackedModel):
    ref = models.CharField(max_length=12)
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    price = models.IntegerField()
    description = models.TextField(default='')
    category = models.ForeignKey(Category, blank=False, null=True, on_delete=models.CASCADE)
    type = models.ForeignKey(Group, blank=False, null=True, on_delete=models.CASCADE)
    collection = models.ForeignKey(Collection, blank=True, null=True, on_delete=models.CASCADE)
    catalog = models.ForeignKey(Catalog, blank=True, null=True, on_delete=models.CASCADE)
    material = models.CharField(max_length=150, null=True, blank=True)  # Material in which the product is made
    is_feature = models.BooleanField(default=False)
    is_discount = models.BooleanField(default=False)
    trending = models.BooleanField(default=False)
    flash_sale = models.BooleanField(default=False)
    # TODO Set currency field here, then create method field for returning price in a specific currency

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("single_product", kwargs={"slug": self.slug})


class Color(CoreTrackedModel):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    picture = models.FileField(upload_to=color_motif_upload_path, null=True)

    def __str__(self):
        return self.title


class Variety(CoreTrackedModel):
    product = models.ForeignKey(Product, blank=False, on_delete=models.CASCADE, related_name="product_variety")
    color = models.ForeignKey(Color, blank=True, null=True, on_delete=models.CASCADE)
    size = models.ForeignKey("Size", blank=True, null=True, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=0)
    picture1 = models.FileField(upload_to=product_variety_image_path, null=True, blank=True)
    picture2 = models.FileField(upload_to=product_variety_image_path, null=True, blank=True)
    picture3 = models.FileField(upload_to=product_variety_image_path, null=True, blank=True)
    picture4 = models.FileField(upload_to=product_variety_image_path, null=True, blank=True)

    def __str__(self):
        return '%s - %s' % (self.product.title, self.color.title)


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
        return 'Cart %s - %s (%s)' % (str(self.cart.ref), self.variety.product.title, self.variety.color.title)


class Article(CoreTrackedModel):
    title = models.CharField(max_length=250, null=False, blank=False)
    slug = models.SlugField(unique=True)
    author = models.CharField(max_length=250, null=False, blank=False)
    guess = models.CharField(max_length=150, null=False, blank=False)
    photograph = models.CharField(max_length=150, null=False, blank=False)
    date = models.DateTimeField(null=True, blank=True)
    resume = models.TextField()
    content = models.TextField()
    facebookUrl = models.TextField(blank=True, null=True)
    twitterUrl = models.TextField(blank=True, null=True)
    whatsappUrl = models.TextField(blank=True, null=True)
    mailUrl = models.TextField(blank=True, null=True)
    coverImage = models.FileField(upload_to=articles_image_path, null=True, blank=True)
    articleImage = models.FileField(upload_to=articles_image_path, null=True, blank=True)
    cover = models.BooleanField(default=False)
    mainMenu = models.BooleanField(default=False)
    # Just for knowing if is the home cover magazine
    is_home = models.BooleanField(default=False)

    def __str__(self):
        return '%s - %s' % (self.title, self.author)


class MainMenuNavPicture(CoreTrackedModel):
    clothing = models.FileField(upload_to=main_menu_pic_upload_path, null=True, blank=True)
    shoes = models.FileField(upload_to=main_menu_pic_upload_path, null=True, blank=True)
    bag = models.FileField(upload_to=main_menu_pic_upload_path, null=True, blank=True)
    accessory = models.FileField(upload_to=main_menu_pic_upload_path, null=True, blank=True)
    jewelery = models.FileField(upload_to=main_menu_pic_upload_path, null=True, blank=True)
    lingerie = models.FileField(upload_to=main_menu_pic_upload_path, null=True, blank=True)
    beauty = models.FileField(upload_to=main_menu_pic_upload_path, null=True, blank=True)
    editorial = models.FileField(upload_to=main_menu_pic_upload_path, null=True, blank=True)

    def __str__(self):
        return self.pk


class SeoPage(CoreTrackedModel):
    title = models.CharField(max_length=250, null=False, blank=False)
    slug = models.SlugField(unique=True)
    keywords = models.CharField(max_length=250, null=False, blank=False)
    description = models.TextField()
    url = models.TextField()
    picture = models.FileField(upload_to=seo_pic_upload_path, null=True, blank=True)

    def __str__(self):
        return '%s' % (self.title)


class Banner(CoreTrackedModel):
    name = models.CharField(max_length=250, null=False, blank=False)
    title = models.CharField(max_length=250, null=False, blank=False)
    subTitle = models.CharField(max_length=250, null=False, blank=False)
    slug = models.SlugField(unique=True)
    linkText = models.CharField(max_length=250, null=False, blank=False)
    linkUrl = models.TextField()
    active = models.BooleanField(default=False)
    picture = models.FileField(upload_to=banner_pic_upload_path, null=True, blank=True)
    # Let us know if the banner stay on the home page
    is_home = models.BooleanField(default=False)

    def __str__(self):
        return '%s' % self.name


class Contact(CoreTrackedModel):
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200)
    address_precision = models.CharField(max_length=200)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    # One user can have many addresses but he must choose a specific by default
    main = models.BooleanField(default=False)

    def __str__(self):
        return "Contact: %s %s" % (self.profile.first_name, self.profile.last_name)


class Order(CoreTrackedModel):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True, blank=True)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, null=True, blank=True)
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE, null=True, blank=True)
    # initialized, Pending, delivered, canceled
    status = models.CharField(max_length=200)
    sub_total = models.IntegerField()
    tax_total = models.IntegerField(default=0)
    delivery_fees = models.IntegerField(default=0)
    final_total = models.IntegerField(default=0)
    payment_method = models.CharField(max_length=200)
    express_delivery = models.BooleanField(default=False)
    delivery_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return "Order: %s" % self.id


class Operation(CoreTrackedModel):
    trans_ref = models.CharField(max_length=50)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True, blank=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, null=True, blank=True)
    # initialized, Success, Pending, Failed
    status = models.CharField(max_length=200)
    amount = models.IntegerField()
    buyer_account = models.CharField(max_length=50)
    seller_account = models.CharField(max_length=50)
    vendor = models.CharField(max_length=100)
    trans_date = models.DateTimeField()

    def __str__(self):
        return "Operation: %s" % self.trans_ref