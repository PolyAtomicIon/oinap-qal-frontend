from typing import Tuple
from django.shortcuts import render
from django_filters import rest_framework as filters
from rest_framework import viewsets

from .models import Category, Game
from .serializers import CategorySerializer, GameSerializer
from .filters import CategoryFilter, GameFilter


class CategoryViewSet(viewsets.ModelViewSet):
    http_method_names: Tuple = ("get", "post", "patch", "delete")
    serializer_class = CategorySerializer
    queryset = Category.objects.filter(deleted_at=None)
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CategoryFilter


class GameViewSet(viewsets.ModelViewSet):
    http_method_names: Tuple = ("get", "post", "patch", "delete")
    serializer_class = GameSerializer
    queryset = Game.objects.filter(deleted_at=None)
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = GameFilter
