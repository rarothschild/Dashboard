from rest_framework import serializers
from .models import user, utility, house, ledger

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields =  '__all__'

class createUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = user
        fields =  ('name')

class ledgerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ledger
        fields =  '__all__'

class ledgerSerializer(serializers.ModelSerializer):
    class Meta:
        model = ledger
        fields =  '__all__'

class utilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = utility
        fields =  '__all__'

class houseSerializer(serializers.ModelSerializer):
    class Meta:
        model = house
        fields =  '__all__'

class createHouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = house
        fields =  '__all__'