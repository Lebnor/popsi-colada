from django.shortcuts import redirect, render
from rest_framework import views, viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework.decorators import action, api_view
from django.contrib.auth import login
from django.contrib.auth import get_user_model

from .forms import CustomUserCreationForm

from .models import Cd, Favorite, Food, Market
from .serializers import CdSerializer, FavoriteSerialier,  FoodSerializer, UserSerializer, MarketSerializer
User = get_user_model()

# Create your views here.


def register_user(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            user_favorites = Favorite(user=user, markets={}, foods={})
            user_favorites.save()
            login(request, user)

            return redirect("/")

    else:
        form = CustomUserCreationForm()
    return render(request, 'backend/register.html', {'form': form})


def list_determine_favorite(query, serializer, request):
    response = []
    for elem in query:
        response.append(singular_determine_favorite(elem, serializer, request))
    return response


def singular_determine_favorite(query, serializer, request):
    serializer = serializer(query, many=False)
    obj_response = dict(serializer.data)
    if request.user.is_authenticated:
        favs = Favorite.objects.get(user=request.user)
        if str(query.uuid) in favs.foods or str(query.uuid) in favs.markets:
            obj_response['is_favorite'] = 'true'
   

    return obj_response


class FoodViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Food.objects.all()
        response = list_determine_favorite(queryset, FoodSerializer, request)
        return Response(response)

    def retrieve(self, request, pk):
        food = Food.objects.get(uuid=pk)
        response = singular_determine_favorite(food, FoodSerializer, request)
        markets = MarketSerializer(food.markets, many=True).data
        response['markets'] = markets
        return Response(response)


class MarketListView(generics.ListAPIView):
    queryset = Market.objects.all()
    serializer_class = MarketSerializer

    def list(self, request, *args, **kwargs):
        query = Market.objects.all()
        response = list_determine_favorite(query, MarketSerializer, request)
        return Response(response)


class MarketDetailView(generics.RetrieveAPIView):
    def retrieve(self, request, uuid, *args, **kwargs):
        market = Market.objects.get(uuid=uuid)
        response = singular_determine_favorite(
            market, MarketSerializer, request)
        return Response(response)


class MarketViewSet(viewsets.ModelViewSet):
    queryset = Market.objects.all()
    serializer_class = MarketSerializer

    def list(self, request):
        queryset = Market.objects.all()
        response = list_determine_favorite(queryset, MarketSerializer, request)
        return Response(response)

    def retrieve(self, request, pk=None):
        market = Market.objects.get(uuid=pk)
        response = singular_determine_favorite(
            market, MarketSerializer, request)
        foods = []
        foods = FoodSerializer(market.food_set, many=True)
        response['foods'] = foods.data
        return Response(response)


class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerialier

    def retrieve(self, request, *args, **kwargs):
        favorite = Favorite.objects.get(user=request.user)
        favorite = FavoriteSerialier(favorite, many=False)
        return Response(favorite.data)


@api_view(['GET'])
def favorites_self(request):
    if not request.user.is_authenticated:
        return Response({'foods': {}, 'markets': {}})
    favorite = Favorite.objects.get(user=request.user)
    markets = Market.objects.filter(uuid__in=favorite.markets)
    markets = MarketSerializer(markets, many=True).data
    foods = Food.objects.filter(uuid__in=favorite.foods)
    foods = FoodSerializer(foods, many=True).data
    return Response({'foods': foods, 'markets': markets})




@api_view(['PUT'])
def add_favorite_food(request, uuid):
    response = {}
    favorites = Favorite.objects.get(user=request.user)
    if uuid in favorites.foods:
        favorites.foods.pop(uuid, None)
    else:
        favorites.foods[uuid] = True
    favorites.save()
    return Response(response)


@api_view(['PUT'])
def add_favorite_market(request, uuid):
    response = {}
    favorites = Favorite.objects.get(user=request.user)
    if uuid in favorites.markets:
        favorites.markets.pop(uuid, None)
    else:
        favorites.markets[uuid] = True
    favorites.save()
    return Response(response)

@api_view(['GET', 'POST'])
def get_current_user(request):
    if not request.user.is_authenticated:
        return Response({})
    user = UserSerializer(request.user, many=False).data
    return Response(user)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    


class CdViewSet(viewsets.ModelViewSet):
    queryset = Cd.objects.all()
    serializer_class = CdSerializer
    permission_classes = [permissions.IsAuthenticated]

    # override default for custom queryset
    def list(self, request):
        queryset = Cd.objects.filter(owner=request.user)
        serializer = CdSerializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        # create a new object or update an existing one
        print('perform_create, serializer = ', serializer)
        name = serializer.data['name']
        amount = serializer.data['amount']
        found_cd = Cd.objects.filter(
            name=name, owner=serializer.context['request'].user)
        if found_cd:
            found_cd[0].amount = amount
            found_cd[0].save()
        else:
            new_cd = Cd(name=name, amount=amount,
                        owner=serializer.context['request'].user)
            new_cd.save()
