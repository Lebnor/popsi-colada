from django.shortcuts import render

# Create your views here.

def two_args(request, name=None, uuid=None):
    return render(request, 'frontend/index.html')

def index(request, name=None):
    return render(request, 'frontend/index.html')
