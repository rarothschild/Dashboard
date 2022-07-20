from django.urls import path
from .views import testerView

urlpatterns = [
    path('house/', testerView.as_view()),
]
