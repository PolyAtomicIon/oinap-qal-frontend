from django.db import models
from django.contrib.auth.models import AbstractBaseUser

from core.models import CommonModel
from .choices import all_roles_choices

class CustomUser(AbstractBaseUser, CommonModel):
    email = models.EmailField(
        verbose_name="email",
        max_length=100,
        unique=True,
    )
    username = models.CharField(
        verbose_name="username",
        max_length=255,
        unique=True,
    )
    role = models.CharField(
        verbose_name="role",
        max_length=30,
        choices=all_roles_choices,
    )
    last_login = models.DateTimeField(
        verbose_name="last_login",
        null=True,
        blank=True,
    )


    def __srt__(self):
        return self.username + ',' + self.email
