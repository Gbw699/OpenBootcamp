import sqlite3

conn= sqlite3.connect("serverPrueba.db")
cursor = conn.cursor()

rows = cursor.execute("SELECT * FROM users")
for row in rows:
    print(row)

cursor.close()
conn.close()