from django.urls import path
from .views import set_csrf_token, login_view, logout_view, register_view, CheckAuth
from rest_framework import routers

urlpatterns = [
    path('login', login_view, name='Login'),
    path('logout', logout_view, name='Logout'),
    path('register', register_view.as_view(), name='Register'),
    path('set-csrf', set_csrf_token, name='Set-CSRF'),
    path('test-auth', CheckAuth.as_view(), name='check-auth')
]