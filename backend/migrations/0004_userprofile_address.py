# Generated by Django 2.2 on 2020-06-04 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_product_catalog'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='address',
            field=models.CharField(blank=True, default='', max_length=250, null=True),
        ),
    ]