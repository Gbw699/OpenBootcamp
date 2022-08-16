import tkinter
from tkinter import W

def reset():
    opciones.set(None)

window = tkinter.Tk()
opciones = tkinter.IntVar()
opciones.set(None)
r1=tkinter.Radiobutton(window, text="Blanco", value=0, variable=opciones)
r2=tkinter.Radiobutton(window, text="Negro", value=1, variable=opciones)
r3=tkinter.Radiobutton(window, text="Rojo", value=2, variable=opciones)

r1.grid(column=0, row=0, sticky=tkinter.W, padx=5, pady=5)
r2.grid(column=0, row=1, sticky=tkinter.W, padx=5, pady=5)
r3.grid(column=0, row=2, sticky=tkinter.W, padx=5, pady=5)

reset_button = tkinter.Button(window, text="Return", command=reset)
reset_button.grid(column=0, row=3, sticky=tkinter.E, padx=5, pady=5)

window.mainloop()