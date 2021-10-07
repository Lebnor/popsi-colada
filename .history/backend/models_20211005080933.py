from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields.reverse_related import ManyToManyRel
from django.forms import ModelForm
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model

import uuid
# Extend django's base user if we want to give it more functionality


class User(AbstractUser):
    pass


class Food(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    units = models.PositiveIntegerField()
    price_per_unit = models.PositiveIntegerField()



class Market(models.Model):
    id = models.AutoField(primary_key=True)
    uuid = models.UUIDField(
        default=uuid.uuid4, editable=False, unique=True)

    name = models.CharField(max_length=100)
    img = models.CharField(max_length=200)
    img_field = models.ImageField(blank=True)
    description = models.CharField(max_length=500, blank=True)
    foods = models.ManyToManyField(Food, related_name="markets")

    def __str__(self):
        return self.name

# represents a cd that a user owns


class Cd(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    amount = models.PositiveIntegerField()
    owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.name} [{self.amount}]'
    # add later - modified_date = models.DateTimeField()

    def __str__(self) -> str:
        return f"{self.name}, {self.amount}"

# Create your models here.

# class to represent form for cd model


class CdForm(ModelForm):
    class Meta:
        model = Cd
        fields = ['name', 'amount']