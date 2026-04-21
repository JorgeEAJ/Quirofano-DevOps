// Variable que no se usa
var errorInutil = "No sirvo para nada";

// eslint-disable-next-line no-unused-vars
function clasificarPaciente(gravedad) {
// Error de formato
const   nombre        =          document            .          getElementById              ("paciente")          .             value             ;
  var                  mensaje =         ""              ;

if (gravedad == "critico") {
mensaje = "🚨 Alerta Roja: Quirófano inmediato para "            + nombre;
} else if (gravedad == "estable") {

// Error de mezcla de comillas dobles y simples
mensaje = '✅ Paciente ' + nombre                      + ' asignado a sala de espera';
}

// Falta de puntos y coma
document.getElementById("pantalla")                    .innerHTML = mensaje
}

function calcular() {
    // Constante no definida
    const numero_pacientes = 100;
    console.log(total + numero_pacientes);
    return 10;
    
    // Codigo inalcanzable
    console.log("Este mensaje nunca se verá"); 
}
console.log(calcular());

//El valor asignado no es usado
const nombre = "Juan";

// Error de constante no puede cambiar de valor
nombre = "Pedro";
console.log(nombre);