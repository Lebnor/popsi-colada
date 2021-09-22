# from django.contrib.auth.models import User
from django.db import models
from django.forms import ModelForm
from django.contrib.auth.models import AbstractUser
# from django.contrib.auth import get_user_model

class User(AbstractUser):
    pass
# User = get_user_model()

class Cd(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    amount = models.PositiveIntegerField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=User.objects.get(is_superuser=True).pk)

    def __str__(self) -> str:
        return f'{self.name} [{self.amount}]'
    # add later - modified_date = models.DateTimeField()

    def __str__(self) -> str:
        return f"{self.name}, {self.amount}"

# Create your models here.
class CdForm(ModelForm):
    class Meta:
        model = Cd
        fields = ['name', 'amount']
