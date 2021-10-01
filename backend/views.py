from django.shortcuts import redirect, render
from rest_framework import views, viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import login
from django.contrib.auth import get_user_model

from .forms import CustomUserCreationForm

from .models import Cd, Food, Market
from .serializers import CdSerializer, FoodSerializer, UserSerializer, MarketSerializer

User = get_user_model()

# Create your views here.


def register_user(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)

            return redirect("/")

    else:
        form = CustomUserCreationForm()
    return render(request, 'backend/register.html', {'form': form})

class FoodViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Food.objects.all()
        serializer = FoodSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Food.objects.get(id=pk)
        serializer = FoodSerializer(queryset, many=False)
        return Response(serializer.data)


class MarketListView(generics.ListAPIView):
    queryset = Market.objects.all()
    serializer_class = MarketSerializer



class MarketDetailView(generics.RetrieveAPIView):
    def retrieve(self, request, uuid, *args, **kwargs):
        market = Market.objects.get(uuid=uuid)
        serializer = MarketSerializer(market, many=False)
        return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def list(self, request, *args, **kwargs):
        queryset = request.user
        serializer = UserSerializer(queryset, many=False)
        return Response(serializer.data)


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
