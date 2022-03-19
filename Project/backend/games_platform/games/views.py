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

    def retrieve(self, request, *args, **kwargs) -> Response:
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        instance.views += 1
        instance.save()

        return Response(
            data={
                "status": "success",
                "data": serializer.data,
            }
        )
