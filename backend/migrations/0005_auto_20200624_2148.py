# Generated by Django 2.2 on 2020-06-24 21:48

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_userprofile_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('name', models.CharField(max_length=100)),
                ('slug', models.SlugField(unique=True)),
                ('created_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
                ('modified_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
            ],
            options={
                'abstract': False,
                'ordering': ['-created_date'],
            },
        ),
        migrations.AddField(
            model_name='product',
            name='Group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.Group'),
        ),
    ]