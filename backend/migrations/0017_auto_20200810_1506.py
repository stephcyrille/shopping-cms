# Generated by Django 2.2 on 2020-08-10 15:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0016_contact'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='address_supplement',
            new_name='address_precision',
        ),
    ]
