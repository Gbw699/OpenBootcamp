import time

hora=time.strftime("%H")
minutos=time.strftime("%M")
print(hora)
print(minutos)

if int(hora) >= 19:
    print("es hora de irse a casa")
else:
     print("faltan {} horas y {} minutos para irse a casa".format(18- int(hora), 59- int(minutos)))