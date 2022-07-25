from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework import authentication, permissions
from .serializers import HomeSerializer, CreateHomeSerializer
from .models import Home
from django.http import JsonResponse

# Create your views here.
class ListHomes(APIView):
    serializer_class = HomeSerializer
    #authentication_classes = [authentication.TokenAuthentication]
    #permission_classes = [permissions.IsAdminUser]
    def get(self,request,format=None):
        homes = [Home.address for Home in Home.objects.all()]
        return Response(homes, status=status.HTTP_200_OK)
    Response({'Bad Request': 'Invalid data...'},status=status.HTTP_400_BAD_REQUEST)

class CreateHome(APIView):
    serializer_class = CreateHomeSerializer
    def post(self,request,format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            address = serializer.data.get('address')
            userQueryset = Home.objects.filter(address=address)
            hse = Home(address=address)
            if userQueryset.exists():
                return Response(HomeSerializer(hse).data, status=status.HTTP_200_OK)
            else:
                hse.save()
                return Response(HomeSerializer(hse).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'},status=status.HTTP_400_BAD_REQUEST)