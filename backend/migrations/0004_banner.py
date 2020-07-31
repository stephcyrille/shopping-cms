# Generated by Django 2.2 on 2020-07-31 16:56

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_mainmenunavpicture_seopage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_archived', models.BooleanField(blank=True, default=False)),
                ('is_published', models.BooleanField(blank=True, default=True)),
                ('created_date', models.DateTimeField(blank=True, default=django.utils.timezone.now, editable=False)),
                ('modified_date', models.DateTimeField(blank=True, editable=False, null=True)),
                ('name', models.CharField(max_length=250)),
                ('title', models.CharField(max_length=250)),
                ('subTitle', models.CharField(max_length=250)),
                ('slug', models.SlugField(unique=True)),
                ('linkText', models.CharField(max_length=250)),
                ('linkUrl', models.TextField()),
                ('active', models.BooleanField(default=False)),
                ('picture', models.FileField(blank=True, null=True, upload_to='banner')),
                ('created_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
                ('modified_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to='backend.UserProfile')),
            ],
            options={
                'ordering': ['-created_date'],
                'abstract': False,
            },
        ),
    ]
