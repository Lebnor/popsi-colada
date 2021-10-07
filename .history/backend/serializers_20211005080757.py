from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Cd, User, Market, Food
# , Stock


class FoodSerializer(serializers.ModelSerializer):
    markets = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Food
        fields = '__all__'
        
class MarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Market
        fields = '__all__'
        depth = 1

class CdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cd
        fields = ('name', 'amount', 'id')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password','email')

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        