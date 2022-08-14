def buscarImpares(lista):
    for i in range(lista):
        if lista%2==0:
            return False
        else:
            return True
    
lista=[1,2,3,4,5,6,7,8,9]

print(f"los números imapres de la lista son: {list(filter(buscarImpares,lista))}")