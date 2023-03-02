document.addEventListener('DOMContentLoaded', function() {
// Seleccionar los elementos de la interfaz
const inputNombre = document.querySelector('#nombre');
const inputEmpresa = document.querySelector('#empresa');
const inputEmail = document.querySelector('#email');
const inputFono = document.querySelector('#teléfono');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');

// EVENTOS
inputNombre.addEventListener('blur', validar);
inputEmpresa.addEventListener('blur', validar);
inputEmail.addEventListener('blur', validar);
inputFono.addEventListener('blur', validar);
inputMensaje.addEventListener('blur', validar);

function validar(e) {

    if (e.target.value.trim() === '') {
        mostrarAlerta(`* Falta ingresar ${e.target.id}`, e.target.parentElement);
        return;
    }

    validarEmail(e.target.value);

    limpiarAlerta(e.target.parentElement)
}

function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    // Generar alerta HTML
    const error = document.createElement('DIV');
    error.textContent = mensaje;
    error.classList.add("error-form");

    // Inyectar en html
    referencia.appendChild(error);
}

function limpiarAlerta(referencia) {
      // Varificar si a hay una alerta
    const alerta = referencia.querySelector('.error-form');
    if (alerta) {
        alerta.remove();
    }
}

function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.text(email);
    console.log(resultado);
}
})