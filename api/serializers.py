from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from .models import UserProfile, Utility, House, Ledger

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields =  '__all__'

class CreateUserSerializer(RegisterSerializer):
    class Meta:
        model = UserProfile
        fields =  '__all__'

class ledgerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ledger
        fields =  '__all__'

class ledgerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ledger
        fields =  '__all__'

class utilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Utility
        fields =  '__all__'

class houseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields =  '__all__'

class createHouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields =  '__all__'