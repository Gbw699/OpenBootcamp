import tkinter as tk


colores = ["Rojo", "Verde", "Amarillo", "Azúl", "Violeta"]

window = tk.Tk()

tk.Label(window, text="Seleccionar color:", bg="black", fg="white").pack(side="top", fill="both", ipadx=50, ipady=50)

coloresControlado=tk.StringVar(window, colores)
tk.Listbox(window, listvariable=coloresControlado).pack(side="bottom", fill="both", padx=50, pady=50)

window.mainloop()