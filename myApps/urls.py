from django.urls import path, include

urlpatterns = [
    path('HouseTrack/',include('myApps.HouseTrack.urls')),
    path('BackTester/',include('myApps.BackTester.urls')),
]
