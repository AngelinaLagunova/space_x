from django.db import models


class Menu(models.Model):
    name = models.CharField(max_length=50)
    url = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Advantages(models.Model):
    text_above = models.CharField(max_length=50)
    text_below = models.CharField(max_length=50)
    value = models.CharField(max_length=50)

    def __str__(self):
        return self.name
