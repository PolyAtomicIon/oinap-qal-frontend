from django.contrib import admin
from .models import UserDetail


# Register your models here.
class UserDetailAdmin(admin.ModelAdmin):
    pass
admin.site.register(UserDetail, UserDetailAdmin)