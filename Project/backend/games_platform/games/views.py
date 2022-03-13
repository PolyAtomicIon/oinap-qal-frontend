from django.shortcuts import render
from rest_framework import viewsets
from .models import Category, Game
from .serializers import CategorySerializer, GameSerializer
from typing import Tuple


class CategoryViewSet(viewsets.ModelViewSet):
    http_method_names: Tuple = ("get", "post", "patch", "delete")
    serializer_class = CategorySerializer
    queryset = Category.objects.filter(deleted_at=None)


class GameViewSet(viewsets.ModelViewSet):
    http_method_names: Tuple = ("get", "post", "patch", "delete")
    serializer_class = GameSerializer
    queryset = Game.objects.filter(deleted_at=None)
