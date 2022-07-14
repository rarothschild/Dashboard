from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import houseSerializer, createHouseSerializer, userSerializer, createUserSerializer
from .models import house, user
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
#def main(request):
#    return HttpResponse("Hello")

class userView(generics.ListAPIView):
    queryset = house.objects.all()
    serializer_class = userSerializer

class createUserView(APIView):
    serializer_class = createUserSerializer

    def post(self,request,format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            userID = serializer.data.get('userID')
            userQueryset = user.objects.filter(userID=userID)
            if userQueryset.exists():
                pass
                return Response(userSerializer(usr).data, status=status.HTTP_200_OK)
            else:
                usr = user(name=name)
                usr.save()
                return Response(userSerializer(usr).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'},status=status.HTTP_400_BAD_REQUEST)

class houseView(generics.ListAPIView):
    queryset = house.objects.all()
    serializer_class = houseSerializer

class createHouseView(APIView):
    serializer_class = createHouseSerializer

    def post(self,request,format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            address = serializer.data.get('address')
            userQueryset = house.objects.filter(address=address)
            if userQueryset.exists():
                pass
                return Response(houseSerializer(hse).data, status=status.HTTP_200_OK)
            else:
                hse = house(address=address)
                hse.save()
                return Response(houseSerializer(hse).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'},status=status.HTTP_400_BAD_REQUEST)