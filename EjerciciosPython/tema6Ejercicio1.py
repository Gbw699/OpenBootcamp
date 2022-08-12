class Vehiculo():
    color=None
    ruedas=()
    puertas=()
class Coche(Vehiculo):
    velocidad=()
    cilindrada=()
auto=Coche()
auto.color="rojo"
auto.ruedas=4
auto.puertas=5
auto.velocidad=300
auto.cilindrada=3000
print(auto.color)
print(auto.ruedas)
print(auto.puertas)
print(auto.velocidad)
print(auto.cilindrada)