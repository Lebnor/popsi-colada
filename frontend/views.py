from django.shortcuts import render

# Create your views here.


def market_detail(request, uuid):
    return render(request, 'frontend/index.html')


def index(request):
    return render(request, 'frontend/index.html')
