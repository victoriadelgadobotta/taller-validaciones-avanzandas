document.addEventListener ('DOMContentLoaded', function() {
    const form = document.querySelector ('form');
    const nombre = document.getElementById ('nombre');
    const apellido = document.getElementById ('apellido'); 
    const email = document.getElementById ('email'); 
    const password1 = document.getElementById ('password1'); 
    const password2 = document.getElementById ('password2'); 
    const terminos = document.getElementById ('terminos');
    const modalButton = document.querySelector ('button[data-bs-target="#modalTerminos""]');   
}

////////////////////////////////////////////////////
// Acá está la funcion de agregar el feedback visual
////////////////////////////////////////////////////

function mostrarValidacion (input, mensaje = "") {
    if (input.checkValidity()) {
        input.classList.remove ('is-valid');
        input.classList.add ('is-valid');
        input.setCustomValidity (""); 
    } else {
        input.classList.remove ('is-valid');
        input.classList.add ('is-invalid');
        input.setCustomValidity(mensaje);
    }
}

////////////////////////////////////////////////////
// Aca agregar lavalidación del email porfis
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Aca agregamos la validacion de contraseñas
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Aca agregar la validacion de checkbox de terminos y condiciones
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Aca agregar la validacion de enviar el formulario
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Aca agregar validacion de todos los campos
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Aca agregar la verificacion de si todo esta valida
////////////////////////////////////////////////////