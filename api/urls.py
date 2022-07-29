from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from django.conf.urls import url
from allauth.account.views import confirm_email

#router = DefaultRouter()
#router.register(r'users', UserViewSet, basename='user')

urlpatterns = [
    
    #path('register/', UserViewSet.as_view({'post': 'create'}), name='register'),
    #path("", include(router.urls)),
]
