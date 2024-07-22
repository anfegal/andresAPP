let botonSend=document.getElementById("botonSend")
let textoChat=document.getElementById("textoChat")
let mensajesChat = document.getElementById("mensajesChat");

let preguntas = [
    "¿Cuál es tu nombre?",
    "¿Cuántos años tienes?",
    "¿De dónde eres?",
    "¿Cuál es tu comida favorita?",
    "¿Cuál es tu color favorito?",
    "¿Cuál es tu película favorita?",
    "¿Tienes mascotas?",
    "¿Cuál es tu hobby?",
    "¿Cuál es tu libro favorito?",
    "¿Qué te gusta hacer en tu tiempo libre?"
];

let respuestas = [
    "Mi nombre es Leonardo.",
    "Tengo 28 años.",
    "Soy de Medellín, Colombia.",
    "Mi comida favorita es la lasaña.",
    "Mi color favorito es el azul.",
    "Mi película favorita es 'Inception' (El Origen).",
    "Sí, tengo un perro llamado Rocky.",
    "Mi hobby es leer y hacer senderismo.",
    "Mi libro favorito es 'Cien años de soledad' de Gabriel García Márquez.",
    "Me gusta pasar mi tiempo libre tocando la guitarra y viendo series."
];

let indicePregunta = 0;

// Evento de clic del botón
botonSend.addEventListener("click", procesarInput);

// Evento de tecla 'Enter' en el campo de texto
textoChat.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir el comportamiento por defecto de la tecla Enter
        procesarInput(); // Llama a la misma función que el botón de enviar
    }
});

function procesarInput() {
    let inputUsuario = textoChat.value.toLowerCase();
    textoChat.value = ""; // Limpiar input después de enviar

    if (inputUsuario === "hola") {
        let listaPreguntas = preguntas.map((pregunta, index) => `${index + 1}. ${pregunta}`).join('<br>');
        mensajesChat.innerHTML += `<p class="text-start">hola bienvenido, selecciona entre estas opciones  <br> ${listaPreguntas}</p>`;
    } else {
        let numeroPregunta = parseInt(inputUsuario) - 1;
        if (numeroPregunta >= 0 && numeroPregunta < preguntas.length) {
            mensajesChat.innerHTML += `<p class="text-start">${preguntas[numeroPregunta]}</p>`;
            mensajesChat.innerHTML += `<p class="text-end text-primary fw-bold">${respuestas[numeroPregunta]}</p>`;
        } else {
            mensajesChat.innerHTML += `<p class="text-start">Por favor, introduce un número válido o saluda con "Hola" para ver las preguntas disponibles.</p>`;
        }
    }
    mensajesChat.scrollTop = mensajesChat.scrollHeight;
}