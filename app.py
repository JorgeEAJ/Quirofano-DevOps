# 1. Error de calidad: Variable declarada que NO se usa (Flake8 lo marcará)
medicina_vencida = "Paracetamol 500mg"


def clasificar_paciente(gravedad):
    # 2. Error de formato: Espaciado caótico e indentación desastrosa
    nombre = input("Ingrese nombre del paciente: ")
    mensaje = ""

    # 3. Error de lógica: Comparación poco clara
    if gravedad == "critico":
        # 4. Error de formato: Mezcla de comillas simples y dobles
        mensaje = "🚨 Alerta Roja: Quirófano inmediato para " + nombre
    elif gravedad == "estable":
        mensaje = "✅ Paciente " + nombre + " asignado a sala de espera"

    # 5. Error de formato: Espacios extra antes de los paréntesis
    print(mensaje)


# 6. Función fantasma que nadie llamó (Otro error de Flake8)
def hospital_cerrado():
    return True


# 7. Error de estilo: Código pegado al final sin línea en blanco (PEP 8)
print("Sistema de triaje iniciado")
