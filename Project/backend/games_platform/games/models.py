from django.db import models
from .choices import rating_choices


class Category(models.Model):
    icon = models.CharField(
        verbose_name="icon",
        max_length=35,
    )
    name = models.CharField(
        verbose_name="name",
        max_length=100,
    )


class Game(models.Model):
    title = models.CharField(
        verbose_name="title",
        max_length=255,
    )
    description = models.TextField(
        verbose_name="description",
        null=True,
        blank=True,
    )
    cover = models.FileField(
        verbose_name="cover",
        null=True,
        blank=True,
    )
    views = models.BigIntegerField(
        verbose_name="views_count",
    )

    def __str__(self):
        return self.title
