<!-- 

# ISIS3710-ParcialPractico-202620
# Nombre: Karol Michelle Lozano Benavides 
# Código: 202410980


# ERRORES DE ACCESIBILIDAD
# Se usó Lighthouse y estos fueron los errores que aprecieron

# ERROR 1 - "Background and foreground colors do not have a sufficient contrast ratio."
# Ubicación (archivo y línea) : src\app\plans\new linea 185
# Herramienta que lo detectó : Lighthouse
# Regla o principio incumplido : Contraste de texto con el fondo
# Por qué es un problema o caso especifico : Porque alguien que no tenga buena visión o tenga algo como daltonismo no podría leer el texto
# Correción : Cambiar el className de <p className="text-sm text-slate-300 mt-1">  a <p className="text-sm text-slate-500 mt-3">


# ERROR 2 - "Copia el enlace de una imagen" está ubicado mal
# Ubicación (archivo y línea) : src\app\plans\new línea 69
# Herramienta que lo detectó : mis ojos
# Regla o principio incumplido : Fitts
# Por qué es un problema o caso especifico : Porque alguien que tenga problemas mentales le será más dificil identificar en dónde está la instrucción
# Correción : Puse este fragmento de código:
<p className="text-sm text-slate-500 mt-3">
            Copia el enlace de una imagen
</p>
# fuera de <div className="flex justify-between items-center">




# ERROR 3 - El espacio de "Dirección" no le especifica al usuario qué debería hacer, no le especifica si es dirección de correo electrónico o dirección de la casa
# Ubicación (archivo y línea) : src\app\plans\new línea aprox 120 para abajo
# Herramienta que lo detectó : mis ojos
# Regla o principio incumplido : El que no le especifica al usuario las instrucciones
# Por qué es un problema o caso especifico : Porque la persona que use nuestra aplicación web se puede confundir y poner un dato que no es, por ejemplo, puede que yo necesite la dirección de su casa pero el cliente entendió que era la dirección de correo electrónico
# Correción : Puse este fragmento de código:
<p className="text-sm text-slate-500 mt-3">
    Escribe la dirección exacta del lugar donde se realizará el plan. Esto ayudará a los asistentes a ubicarlo fácilmente.
</p>
# abajo del label de Dirección









 -->


