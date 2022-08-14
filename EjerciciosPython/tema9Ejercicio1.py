items=input("ingresar paises separados por coma:\n")

paises= [pais for pais in items.split(",")]

print(", ".join(sorted(paises)))
