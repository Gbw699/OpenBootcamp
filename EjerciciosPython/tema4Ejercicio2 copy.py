numero_inicial= int(input("ingresar número inicial ") )
numero_final= int(input("ingresar número final ") )
impares= []
    
while numero_inicial >= numero_final:
    numero_final= int(input("ingresar número final ") )
    
for i in range(numero_inicial, numero_final+1):
    if i % 2 != 0:
        impares.append(i)

print(impares)

