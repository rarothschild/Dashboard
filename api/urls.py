from django.urls import path
from .views import set_csrf_token, login_view, logout_view, CheckAuth, UserViewSet
from rest_framework import routers

urlpatterns = [
    path('set-csrf/', set_csrf_token, name='Set-CSRF'),
    path('login/', login_view, name='Login'),
    path('logout/', logout_view, name='Logout'),
    path('test-auth/', CheckAuth.as_view(), name='check-auth')
]

router = routers.SimpleRouter()
router.register(r'users', UserViewSet, basename='UserViewSet')

urlpatterns += router.urls