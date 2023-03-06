document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar los elementos de la interfaz
    const inputNombre = document.querySelector('#nombre');
    const inputEmpresa = document.querySelector('#empresa');
    const inputEmail = document.querySelector('#email');
    const inputFono = document.querySelector('#teléfono');
    const inputMensaje = document.querySelector('#mensaje');
    const form = document.querySelector('#form');
    const spinner = document.querySelector('#spinner');
    const btnSubmit = document.querySelector('#btnEnviar');
    const btnReset = document.querySelector('#btnReset');

    const formulario = {
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    // EVENTOS
    inputNombre.addEventListener('input', validar);
    inputEmpresa.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputFono.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    inputNombre.addEventListener('blur', validar);
    inputEmpresa.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputFono.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    form.addEventListener('submit', enviarForm);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        resetFormulario();
        form.reset();
        console.log(formulario);
    })
    
    function enviarForm(e) {
        e.preventDefault();
        console.log('form enviado');

        spinner.classList.remove('v-hidden');

        setTimeout(() => {
            spinner.classList.add('v-hidden');

            resetFormulario();
        }, 3000);
    }

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`* Falta ingresar ${e.target.id}`, e.target.parentElement.firstElementChild);
            formulario[e.target.name] = '';
            comprobarForm()
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('*El email no es valido', e.target.parentElement.firstElementChild);
            formulario[e.target.name] = '';
            return;
        }
        if (e.target.id === 'teléfono' && e.target.value.length < 8) {
            mostrarAlerta('*El número no es valido', e.target.parentElement.firstElementChild);
            formulario[e.target.name] = '';
            return;
        }

        formulario[e.target.name] = e.target.value.trim().toLowerCase();

        limpiarAlerta(e.target.parentElement.firstElementChild);
        console.log(formulario);
        comprobarForm();
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
        };
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarForm() {
        if (Object.values(formulario).includes('')) {
            btnSubmit.classList.remove('button-r-active');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.add('button-r-active');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        // reiniciar el objeto
        formulario.nombre = '';
        formulario.empresa = '';
        formulario.email = '';
        formulario.telefono = '';
        formulario.mensaje = '';
        comprobarForm();
    }


})