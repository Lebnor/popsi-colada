from django.urls import path
from django.urls.conf import include
from . import views
from rest_framework import routers
from django.contrib import admin


router = routers.DefaultRouter()
router.register(r'cds', views.CdViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', views.register_user),
    path('api/', include(router.urls)),
    path('api/', include('rest_framework.urls', namespace="rest_framework")),
    path('api/markets', views.MarketListView.as_view(), name='markets'),
    path('api/market-detail/<str:uuid>', views.MarketDetailView.as_view(), name="market-detail"),
    path('', include('frontend.urls')),


]