from rest_framework import serializers
from .models import Utility, Home, Ledger

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

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields =  '__all__'

class CreateHomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields =  '__all__'