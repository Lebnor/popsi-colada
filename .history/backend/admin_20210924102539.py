from django.contrib import admin
from .models import Cd, User, Market

# Register your models here.
admin.site.register(Cd)
admin.site.register(User)
admin.site.register(Market)