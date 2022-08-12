from socket import NI_NUMERICHOST


def nprimos(numero):
    if numero==2 or numero==3:
        return True
    else:
        if numero%2!=0 and numero%3!=0:
            return True
        else: 
            return False

validacion=nprimos(int(input("escribir un número ")))
print(f"el número es primo? {validacion}")