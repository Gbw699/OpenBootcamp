# Generated by Django 4.1 on 2022-08-18 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cine', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='directores',
            name='Año_de_nacimiento',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='peliculas',
            name='Año_de_estreno',
            field=models.IntegerField(),
        ),
    ]
