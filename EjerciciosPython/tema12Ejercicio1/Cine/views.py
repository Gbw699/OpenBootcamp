from django.shortcuts import render
from .models import Directores, peliculas
# Create your views here.

def index(request):
    request_directores = Directores.objects.all()
    request_peliculas = peliculas.objects.all()

    return render(
        request,
        'index.html',
        context={
            'request_directores': request_directores,
            'request_peliculas': request_peliculas
        }
    )