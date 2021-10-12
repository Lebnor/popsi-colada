from django.urls import path
from .views import index, market_detail

urlpatterns = [
    path('', index),
    path('register', index),
    path('about', index),
    path('browse', index),
    path('market-detail/<str:uuid>', market_detail),
    path('food-detail/<str:uuid>', market_detail),
    path('markets:search', index),
    path('cds', index),
  
]