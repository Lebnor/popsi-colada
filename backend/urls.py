from django.urls import path
from django.urls.conf import include
from . import views
from rest_framework import routers
from django.contrib import admin


router = routers.DefaultRouter()
router.register(r'cds', views.CdViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'foods', views.FoodViewSet, basename='foods')
router.register(r'markets', views.MarketViewSet, basename='markets')
router.register(r'favorites', views.FavoriteViewSet, basename='favorites')

urlpatterns = [
    path('api/register/', views.register_user),
    path('api/', include(router.urls)),
    path('api/', include('rest_framework.urls', namespace="rest_framework")),
    path('api/markets', views.MarketListView.as_view(), name='markets'),
    path('api/market-detail/<str:uuid>', views.MarketDetailView.as_view(), name="market-detail"),
    path('api/add-favorite/markets/<str:uuid>', views.add_favorite_market, name="favorite-market"),    
    path('api/add-favorite/foods/<str:uuid>', views.add_favorite_food, name="favorite-market"),    
    path('api/current-user/', views.get_current_user),
    path('api/favorites-self/', views.favorites_self),
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),


]