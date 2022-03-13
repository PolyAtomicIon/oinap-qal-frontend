# Generated by Django 4.0.3 on 2022-03-13 15:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('commonmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.commonmodel')),
                ('icon', models.CharField(blank=True, max_length=35, null=True, verbose_name='icon')),
                ('name', models.CharField(max_length=100, verbose_name='name')),
            ],
            options={
                'verbose_name': 'category',
                'verbose_name_plural': 'categories',
            },
            bases=('core.commonmodel',),
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('commonmodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='core.commonmodel')),
                ('title', models.CharField(max_length=255, verbose_name='title')),
                ('description', models.TextField(blank=True, null=True, verbose_name='description')),
                ('cover', models.FileField(blank=True, null=True, upload_to='', verbose_name='cover')),
                ('views', models.BigIntegerField(verbose_name='views_count')),
            ],
            options={
                'verbose_name': 'game',
                'verbose_name_plural': 'games',
            },
            bases=('core.commonmodel',),
        ),
    ]
