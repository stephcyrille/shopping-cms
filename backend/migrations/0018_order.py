# Generated by Django 2.2 on 2020-08-19 13:43

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0017_auto_20200810_1506'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('status', models.CharField(max_length=200)),
                ('sub_total', models.IntegerField()),
                ('tax_total', models.IntegerField(default=0)),
                ('delivery_fees', models.IntegerField(default=0)),
                ('final_total', models.IntegerField(default=0)),
                ('payment_method', models.CharField(max_length=200)),
                ('express_delivery', models.BooleanField(default=False)),
                ('cart', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.Cart')),
                ('contact', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.Contact')),
                ('created_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
                ('modified_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
            ],
            options={
                'abstract': False,
                'ordering': ['-created_date'],
            },
        ),
    ]
