# Generated by Django 2.2 on 2020-08-09 12:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0014_product_flash_sale'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='title',
        ),
    ]
