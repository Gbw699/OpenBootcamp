


class Alumno():
    nombre=None
    nota=()
    def __init__(self):
        self.nombre=input("ingresar nombre del alumno: ")
        self.nota=int(input("ingresar nota del alumno: "))
alumno1=Alumno()
if alumno1.nota >= 70:
    print(alumno1.nombre)
    print(alumno1.nota)
    print("APROBADO")
else:
    print(alumno1.nombre)
    print(alumno1.nota)
    print("DESAPROBADO")