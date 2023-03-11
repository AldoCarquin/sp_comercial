document.addEventListener('DOMContentLoaded', function () {

    const burger = document.querySelector('#hamburguesa');

    const lineaUno = document.querySelector('#lineaUno');
    const lineaTres = document.querySelector('#lineaTres');
    const lineaFle1 = document.querySelector('#lineafle1');
    const lineaFle3 = document.querySelector('#lineafle3');

    let queso = 0;

    burger.addEventListener('click', convFle );

    function convFle() {
        if (queso === 0) {
            lineaUno.classList.remove('linea1');
            lineaUno.classList.add('linea1fle');
            lineaTres.classList.remove('linea3');
            lineaTres.classList.add('linea3fle');
            lineaFle1.classList.remove('linea');
            lineaFle1.classList.add('lineaflecha');
            lineaFle3.classList.remove('linea');
            lineaFle3.classList.add('lineaflecha');
            queso = 1;
        } else {
            lineaUno.classList.add('linea1');
            lineaUno.classList.remove('linea1fle');
            lineaTres.classList.add('linea3');
            lineaTres.classList.remove('linea3fle');
            lineaFle1.classList.add('linea');
            lineaFle1.classList.remove('lineaflecha');
            lineaFle3.classList.add('linea');
            lineaFle3.classList.remove('lineaflecha');
            queso = 0;
        }
    }
})