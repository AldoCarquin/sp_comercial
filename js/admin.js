document.addEventListener('DOMContentLoaded', function () {

    const inputUser = document.querySelector('#user');
    const inputPass = document.querySelector('#pass');
    const btnEnviar = document.querySelector('#btnEnviar');

    const login = {
        nombre: '',
        empresa: '',
    }

    inputUser.addEventListener('blur', revisar);
    inputPass.addEventListener('blur', revisar);

    btnEnviar.addEventListener('click', hideAlert)

    function revisar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`* Falta ingresar ${e.target.id}`, e.target.parentElement.firstElementChild);
            login[e.target.name] = '';
            comprobarLogin()
            console.log(login);
            return;
        }
        login[e.target.name] = e.target.value.trim().toLowerCase();

        limpiarAlerta(e.target.parentElement.firstElementChild);

        comprobarLogin();
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

    function comprobarLogin() {
        if (Object.values(login).includes('')) {
            btnEnviar.classList.remove('button-r-active');
            btnEnviar.disabled = true;
            return
        }
        btnEnviar.classList.add('button-r-active');
        btnEnviar.disabled = false;
    }

    function showAlert() {
        aviso.classList.remove('mtp-200');
        aviso.classList.remove('top-100');
        aviso.classList.add('top-50');
    }

    function hideAlert() {
        aviso.classList.add('mtp-200');
        aviso.classList.add('top-100');
        aviso.classList.remove('top-50');
    }

})