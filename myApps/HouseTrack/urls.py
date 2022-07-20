from django.urls import path
from .views import ListHomes, CreateHome

urlpatterns = [
    path('ListHomes', ListHomes.as_view()),
    path('CreateHome', CreateHome.as_view()),
]
