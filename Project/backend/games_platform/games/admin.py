from django.contrib import admin

from .models import Category, Game


class CategoryAdmin(admin.ModelAdmin):
    pass


class GameAdmin(admin.ModelAdmin):
    pass


admin.site.register(Category, CategoryAdmin)
admin.site.register(Game, GameAdmin)
