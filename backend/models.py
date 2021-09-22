from django.db import models
from django.forms import ModelForm
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model

# Extend django's base user if we want to give it more functionality
class User(AbstractUser):
    pass

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
