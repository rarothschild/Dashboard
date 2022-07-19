from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from .serializers import houseSerializer, createHouseSerializer, UserSerializer, CreateUserSerializer
from .models import House, UserProfile

# Create your views here.
#def main(request):
#    return HttpResponse("Hello")

class userView(generics.ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer

class createUserView(APIView):
    serializer_class = CreateUserSerializer
    def post(self,request,format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            email = serializer.data.get('email')
            userQueryset = UserProfile.objects.filter(email=email)
            if userQueryset.exists():
                pass
                return Response(UserSerializer(usr).data, status=status.HTTP_200_OK)
            else:
                usr = UserProfile(name=name)
                usr.save()
                return Response(UserSerializer(usr).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'},status=status.HTTP_400_BAD_REQUEST)

class houseView(generics.ListAPIView):
    queryset = House.objects.all()
    serializer_class = houseSerializer

class createHouseView(APIView):
    serializer_class = createHouseSerializer

    def post(self,request,format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            address = serializer.data.get('address')
            userQueryset = House.objects.filter(address=address)
            if userQueryset.exists():
                pass
                return Response(houseSerializer(hse).data, status=status.HTTP_200_OK)
            else:
                hse = House(address=address)
                hse.save()
                return Response(houseSerializer(hse).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'},status=status.HTTP_400_BAD_REQUEST)