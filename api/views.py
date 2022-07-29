from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status, viewsets
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer
from django.contrib.auth import get_user_model

class UserViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = get_user_model().objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = get_user_model().objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def create(self, request):
        VALID_USER_FIELDS = [f.name for f in get_user_model()._meta.fields]
        DEFAULTS = {"id","username","emailaddress"}
        serialized = UserSerializer(data=request.DATA)
        if serialized.is_valid():
            user_data = {field: data for (field, data) in request.DATA.items() if field in VALID_USER_FIELDS}
            user_data.update(DEFAULTS)
            user = get_user_model().objects.create_user(
                **user_data
            )
            return Response(UserSerializer(instance=user).data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass