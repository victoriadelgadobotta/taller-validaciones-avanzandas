document.addEventListener ('DOMContentLoaded', function() {
    const form = document.querySelector ('form');
    const nombre = document.getElementById ('nombre');
    const apellido = document.getElementById ('apellido'); 
    const email = document.getElementById ('email'); 
    const password1 = document.getElementById ('password1'); 
    const password2 = document.getElementById ('password2'); 
    const terminos = document.getElementById ('terminos');
    const modalButton = document.querySelector('button[data-bs-target="#modalTerminos"]');  
    const emailRegex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; //Expresion regular para validar el email

////////////////////////////////////////////////////
// Acá está la funcion de agregar el feedback visual
////////////////////////////////////////////////////

function mostrarValidacion (input, mensaje = "") {
    if (input.checkValidity()) {
        input.classList.remove ('is-invalid');
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
function validarEmail() {
    let emailValido = emailRegex.test(email.value);
    if (!emailValido) {
        mostrarValidacion(email, "Debe ingresar un email valido ejemplo: nombre@dominio.com");
    } else {
        mostrarValidacion(email);
    }
    return emailValido;
}

    email.addEventListener('input', validarEmail);  


////////////////////////////////////////////////////
// Aca agregamos la validacion de contraseñas
////////////////////////////////////////////////////
password1.addEventListener('input', function () {
    checkPasswords();
});

password2.addEventListener('input', function () {
    checkPasswords();
});

function checkPasswords() {
    if (password1.value !== password2.value) {
        password2.setCustomValidity('Las contraseñas no coinciden');
    } else {
        password2.setCustomValidity('');
    }
}

////////////////////////////////////////////////////
// Aca agregar la validacion de checkbox de terminos y condiciones
////////////////////////////////////////////////////
function validarTerminos() {
    if (!terminos.checked) {
        mostrarValidacion(terminos, 'Debe aceptar los términos y condiciones.');
        botonTerminos.style.color = 'red'; // Cambia el color del botón
        mostarerrorterminos.innerHTML = `
            <div class="invalid-feedback d-inline" id="errorterminos">Debes aceptar los términos y condiciones.</div>
        `;
    } else {
        mostrarValidacion(terminos);
        botonTerminos.style.color = ''; // Restablece el color si está marcado
        mostarerrorterminos.innerHTML = "";
    }
}
////////////////////////////////////////////////////
// Aca agregar la validacion de enviar el formulario
////////////////////////////////////////////////////
form.addEventListener('submit', function (event) {
    validarEmail();
    checkPasswords();
    validarTerminos();

    let formularioValido = form.checkValidity();
    if (!formularioValido) {
        event.preventDefault(); // Impide el envío
        event.stopPropagation(); // Detiene la propagación
    }

    form.classList.add('was-validated'); // Aplica estilos de validación de Bootstrap
});

////////////////////////////////////////////////////
// Aca agregar la verificacion de si todo esta valida
////////////////////////////////////////////////////
form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        mostrarValidacion(input);
    });
});
});