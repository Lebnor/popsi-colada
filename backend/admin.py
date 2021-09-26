from django.contrib import admin
from .models import Cd, User, Market, Food

# Register your models here.
admin.site.register(Cd)
admin.site.register(User)
admin.site.register(Market)
# admin.site.register(Stock)
admin.site.register(Food)