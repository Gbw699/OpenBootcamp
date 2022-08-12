
def determinador(año):
    if año%4==0 and año%100!=0 or año%400==0:
        return True,año
    else:
        return False,año
resultado,año=determinador(int(input("ingresar un año ")))
if resultado==True:
    print(f"el año {año} es bisiesto")
else:
    print(f"el año {año} no es bisiesto")