from rest_framework import serializers

from .models import Category, Game


class CategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField(
        required=True,
        max_length=100,
        allow_null=False,
        allow_blank=True,
    )
    icon = serializers.CharField(
        required=True,
        max_length=35,
        allow_null=True,
        allow_blank=True,
    )

    class Meta:
        model = Category
        exclude = (
            'created_at',
            'updated_at',
            'deleted_at'
        )


class GameSerializer(serializers.ModelSerializer):
    title = serializers.CharField(
        max_length=255,
        allow_null=False,
        allow_blank=False,
    )
    description = serializers.CharField(
        allow_null=True,
        allow_blank=True,
        max_length=1000,
    )
    cover = serializers.FileField(
        required=False,
        read_only=True,
        allow_null=True,
    )
    _category = serializers.PrimaryKeyRelatedField(
        required=False,
        queryset=Category.objects.filter(deleted_at=None),
    )

    class Meta:
        model = Game
        exclude = (
            'created_at',
            'updated_at',
            'deleted_at'
        )

    def create(self, validated_data):
        return Game.objects.create(**validated_data)

