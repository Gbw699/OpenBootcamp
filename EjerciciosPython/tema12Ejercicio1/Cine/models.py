from inspect import classify_class_attrs
from django.db import models

# Create your models here.
class Directores(models.Model):
    Nombre_apellido = models.CharField(max_length=100)
    Año_de_nacimiento = models.IntegerField()
    Peliculas = models.ManyToManyField("peliculas")

    def __str__(self):
        return self.Nombre_apellido

class peliculas(models.Model):
    Nombre_pelicula = models.CharField(max_length=100)
    Año_de_estreno = models.IntegerField()
    Descripcion = models.TextField(help_text="Escribir descripción de la película") 

    def __str__(self):
        return self.Nombre_pelicula
