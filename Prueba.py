from curses import window
import opcode
import tkinter
from tkinter import E, W, ttk
from tkinter.tix import COLUMN

window=tkinter.Tk()


opciones=tkinter.StringVar()

r1=tkinter.Radiobutton(window, text="si", value="1", variable=opciones)
r2=tkinter.Radiobutton(window, text="no", value="2", variable=opciones)
r3=tkinter.Radiobutton(window, text="sino", value="3", variable=opciones)

r1.grid(column=0, row=0, sticky=tkinter.W, padx=5, pady=5)
r2.grid(column=0, row=1, sticky=tkinter.W, padx=5, pady=5)
r3.grid(column=0, row=2, sticky=tkinter.W, padx=5, pady=5)

window.mainloop()