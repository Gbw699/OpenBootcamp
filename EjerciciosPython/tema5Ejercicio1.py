from email.mime import base
import math


def area(altura,base):
    return ((base*altura)/2)
def area2(radio):
    return math.pi*(radio**2)

area_triangulo=area(int(input("altura ")),int(input("base ")))
area_circulo=area2(30)

print(area_triangulo)
print(area_circulo)
