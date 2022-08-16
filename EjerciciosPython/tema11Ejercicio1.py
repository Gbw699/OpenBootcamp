import sqlite3
conn = sqlite3.connect("serverPrueba.db")
cursor = sqlite3.Cursor(conn)

for row in cursor.execute('SELECT Id,Nombre,Apellido FROM alumnos WHERE Nombre="José"'):
   print(row)
    
cursor.close()
conn.close()