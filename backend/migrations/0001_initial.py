# Generated by Django 2.2 on 2020-05-15 20:16

import backend.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('ref', models.CharField(blank=True, max_length=10, null=True)),
                ('total', models.IntegerField(default=0)),
                ('status', models.CharField(default='Open', max_length=25)),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField(unique=True)),
                ('picture', models.FileField(null=True, upload_to='categories')),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Collection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField(unique=True)),
                ('picture', models.FileField(null=True, upload_to='collections')),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('name', models.CharField(max_length=200)),
                ('code', models.CharField(max_length=10)),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('ref', models.CharField(max_length=12)),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField(unique=True)),
                ('price', models.IntegerField()),
                ('description', models.TextField(default='')),
                ('material', models.CharField(blank=True, max_length=150, null=True)),
                ('is_feature', models.BooleanField(default=False)),
                ('is_discount', models.BooleanField(default=False)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Category')),
                ('collection', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.Collection')),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('name', models.CharField(max_length=50)),
                ('size_system', models.CharField(default='', max_length=20)),
                ('quantity', models.IntegerField(default=0)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Category')),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gender', models.CharField(max_length=10)),
                ('title', models.CharField(blank=True, max_length=4, null=True)),
                ('phone_number', models.CharField(blank=True, max_length=50, null=True)),
                ('first_name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('city', models.CharField(blank=True, max_length=100, null=True)),
                ('country', models.CharField(blank=True, max_length=100, null=True)),
                ('birth_date', models.DateField(blank=True, null=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('user', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='userprofile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Variety',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('quantity', models.IntegerField(default=0)),
                ('picture1', models.FileField(blank=True, null=True, upload_to=backend.models.product_variety_image_path)),
                ('picture2', models.FileField(blank=True, null=True, upload_to=backend.models.product_variety_image_path)),
                ('picture3', models.FileField(blank=True, null=True, upload_to=backend.models.product_variety_image_path)),
                ('picture4', models.FileField(blank=True, null=True, upload_to=backend.models.product_variety_image_path)),
                ('color', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.Color')),
                ('created_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
                ('modified_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Product')),
                ('size', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.Size')),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='size',
            name='created_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='size',
            name='modified_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='product',
            name='created_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='product',
            name='modified_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='color',
            name='created_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='color',
            name='modified_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='collection',
            name='created_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='collection',
            name='modified_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='category',
            name='created_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='category',
            name='modified_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('quantity', models.IntegerField(default=1)),
                ('line_total', models.IntegerField(default=1)),
                ('cart', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.Cart')),
                ('created_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
                ('modified_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
                ('variety', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.Variety')),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='cart',
            name='created_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
        migrations.AddField(
            model_name='cart',
            name='modified_by',
            field=models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile'),
        ),
    ]
