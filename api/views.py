from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from .serializers import UserSerializer, CreateUserSerializer
from .models import UserProfile

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