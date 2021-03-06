from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Cd, Favoritable, Favorite, User, Market, Food
# , Stock


class MarketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Market
        fields = ('uuid', 'name', 'img', 'description')
        depth = 1


class FoodSerializer(serializers.ModelSerializer):
    # markets = MarketSerializer(many=True, read_only=True)
    class Meta:
        model = Food
        fields = ('uuid', 'name', 'units', 'price_per_unit', 'img', 'description')
        depth = 5


class CdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cd
        fields = ('name', 'amount', 'id')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class FavoriteSerialier(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
