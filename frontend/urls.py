from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('HouseFinance',index),
    path('CreateUser',index)
]