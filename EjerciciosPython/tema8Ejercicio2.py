from json import dumps
import pickle

class Vehiculo:
    color=None
    def __init__(self,color):
        self.color=color

corsa=Vehiculo("rojo")

f=open("objetoCorsa", "wb")
pickle.dump(corsa,f)
f.close()

f=open("objetoCorsa","rb")
corsaCargado=pickle.load(f)
f.close()

print(corsa.color)
print(corsaCargado.color)