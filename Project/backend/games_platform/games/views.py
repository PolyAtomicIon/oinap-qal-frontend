from typing import Tuple

from django_filters import rest_framework as filters
from rest_framework import viewsets

from .filters import CategoryFilter, GameFilter
from .models import Category, Game
from .serializers import CategorySerializer, GameSerializer


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
    # def list(self, request):
    #     category = request.GET.get('category', "")
    #     queryset = Game.objects.all()
    #     if categories:
    #         queryset = queryset.filter(category=category)
    #     serializer = GameSerializer(queryset, many=True)
    #     return Response(data=serializer.data)
