from django.urls import path
from .views import index, two_args

urlpatterns = [

    path('', index),
    path('register', index),
    path('about', index),
    path('browse', index),
    path('markets:search', index),
    path('cds', index),
    path('favorite', index),
    # path('<str:name>/<str:uuid>', two_args),
    # path('<str:name>', index),

]
