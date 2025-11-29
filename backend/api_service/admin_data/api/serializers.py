from rest_framework import serializers

from admin_data.models import Menu, Advantages


class MenuSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    url = serializers.CharField()

    class Meta:
        model = Menu
        fields = (
            "id",
            "name",
            "url",
        )


class AdvantagesSerializer(serializers.ModelSerializer):
    text_above = serializers.CharField()
    text_below = serializers.CharField()
    value = serializers.CharField()

    class Meta:
        model = Advantages
        fields = (
            "id",
            "text_above",
            "text_below",
            "value",
        )