from re import S
from this import s
from django.contrib import admin

from .models import Directores, peliculas

# Register your models here.
admin.site.register(Directores)
admin.site.register(peliculas)