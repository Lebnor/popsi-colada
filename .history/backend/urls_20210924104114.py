from django.urls import path
from django.urls.conf import include
from . import views
from rest_framework import routers
from django.contrib import admin


router = routers.DefaultRouter()
router.register(r'cds', views.CdViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'markets', views.MarketListView)
# router.register(r'', CdListView.as_view())
# router.register(r'', CdCreateView.as_view())

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', views.register_user),
    path('api/', include(router.urls)),
    path('api/', include('rest_framework.urls', namespace="rest_framework")),
    path('', include('frontend.urls')),

    # path('api/auth/', include('django.contrib.auth.urls')),

]