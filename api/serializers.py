from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from .models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields =  '__all__'

class CreateUserSerializer(RegisterSerializer):
    class Meta:
        model = UserProfile
        fields =  '__all__'