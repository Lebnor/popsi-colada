from django.contrib import admin
from .models import Cd, User, Market, Food, User, Favorite

# Register your models here.
admin.site.register(Cd)
admin.site.register(User)
admin.site.register(Market)
admin.site.register(Food)
admin.site.register(Favorite)