from django.db import models
from django.db.models.deletion import CASCADE, DO_NOTHING
from django.db.models.fields import related
from django.db.models.fields.reverse_related import ManyToManyRel
from django.forms import ModelForm
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model

import uuid


class User(AbstractUser):
    pass


class Favoritable(models.Model):

    class Meta:
        abstract = True


class Detailable(models.Model):
    uuid = models.UUIDField(
        default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100, blank=True)
    img = models.CharField(max_length=200, null=True)

    class Meta:
        abstract = True


class Market(Favoritable, Detailable):

    def __str__(self):
        return self.name


class Food(Favoritable, Detailable):
    units = models.PositiveIntegerField()
    price_per_unit = models.PositiveIntegerField()
    markets = models.ManyToManyField(Market)

    def __str__(self) -> str:
        return self.name
# represents a cd that a user owns


class Cd(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    amount = models.PositiveIntegerField()
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.name} [{self.amount}]'

    def __str__(self) -> str:
        return f"{self.name}, {self.amount}"


class Favorite(models.Model):
    user = models.ForeignKey(User, related_name='favorites', on_delete=CASCADE)
    markets = models.JSONField()
    foods = models.JSONField()

    def __str__(self) -> str:
        return f'{self.user}\'s favorites'


class CdForm(ModelForm):
    class Meta:
        model = Cd
        fields = ['name', 'amount']
