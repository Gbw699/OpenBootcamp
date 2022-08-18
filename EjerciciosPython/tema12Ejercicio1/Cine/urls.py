from typing import ValuesView
from django.urls import path
from Cine import views

urlpatterns = [
    path('directores/', views.index ),
    path('peliculas/', views.index)
]