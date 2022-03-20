# Generated by Django 4.0.3 on 2022-03-20 18:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('icon', models.CharField(blank=True, max_length=35, null=True, verbose_name='icon')),
                ('name', models.CharField(max_length=100, verbose_name='name')),
            ],
            options={
                'verbose_name': 'category',
                'verbose_name_plural': 'categories',
            },
        ),
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('title', models.CharField(max_length=255, verbose_name='title')),
                ('description', models.TextField(blank=True, null=True, verbose_name='description')),
                ('cover', models.FileField(blank=True, null=True, upload_to='', verbose_name='cover')),
                ('views', models.BigIntegerField(default=0, verbose_name='views_count')),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='games', to='games.category', verbose_name='category')),
            ],
            options={
                'verbose_name': 'game',
                'verbose_name_plural': 'games',
            },
        ),
        migrations.CreateModel(
            name='GameRating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('deleted_at', models.DateTimeField(blank=True, null=True)),
                ('value', models.SmallIntegerField(choices=[(0, 'NO RATING'), (1, 'Very bad'), (2, 'Bad'), (3, 'Satisfactory'), (4, 'Good'), (5, 'Very well')], verbose_name='rating_value')),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rating', to='games.game')),
                ('user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='game_rating', to='users.customuser')),
            ],
            options={
                'verbose_name': 'game_rating',
                'verbose_name_plural': 'games_ratings',
            },
        ),
    ]
