from rest_framework import viewsets

from .serializers import MenuSerializer, AdvantagesSerializer
from admin_data.models import Menu, Advantages


class MenuViewSet(viewsets.ModelViewSet):
    """
        Вьюсет меню
    """

    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class AdvantagesViewSet(viewsets.ModelViewSet):
    """
        Основной вьюсет записей
    """

    queryset = Advantages.objects.all()
    serializer_class = AdvantagesSerializer
