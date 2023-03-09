document.addEventListener('DOMContentLoaded', function () {

    const parrafoIndex= document.querySelector('#parrafoIndex');
    const fotoIndex = document.querySelector('#fotoIndex');
    const pFotoIndex = document.querySelector('#pFotoIndex');
    const tablon = document.querySelector('#tablon');

    const general = 'Entregamos una oferta amplia y competitiva de abarrotes no perecibles y congelados, además de una gran variedad de bebidas alcohólicas y no alcohólicas para todo el canal HORECA.';
    const parrafoHotel = 'Entregamos una oferta amplia y competitiva de abarrotes no perecibles y congelados, además de una gran variedad de bebidas alcohólicas y no alcohólicas para todo el canal HORECA.';

    document.addEventListener('scroll', showHotel);

    function showHotel() {
            parrafoIndex.textContent = parrafoHotel;
            parrafoIndex.classList.remove('mtp-300', 'top-50');
            parrafoIndex.classList.add('top-60');

            fotoIndex.classList.remove('mxwp-200');
            fotoIndex.classList.add('mxwp-100');

            pFotoIndex.classList.remove('top-50');
            pFotoIndex.classList.add('top-25');
        } 
    
})