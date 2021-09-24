from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('register', index),
    path('about', index),
    path('users', index),
    path('cds', index),
  
]