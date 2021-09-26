from django.urls import path
from .views import index, market_detail

urlpatterns = [
    path('', index),
    path('register', index),
    path('about', index),
    path('markets', index),
    path('market-detail/<str:uuid>', market_detail),
    path('cds', index),
  
]