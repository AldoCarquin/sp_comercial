document.addEventListener('DOMContentLoaded', function() {


const general = 'Ser un socio estratégico y de largo plazo para nuestros clientes, entregando un servicio de excelencia en cada una las instancias de contacto, aportándoles valor a sus procesos de abastecimiento y servicio.';
const abarrotes = 'Todo tipo de abarrotes no perecibles y productos congelados. Trabajamos con distintas marcas y gramajes, con una oferta completa y competitiva.';
const carnes = 'Oferta de calidad en todo tipo de carnes de vacuno, cerdo y aves. Variedad de cortes y gramajes, asegurando productos sanos y frescos.';
const licores = 'Bebidas y licores, de distintas marcas y volúmenes, entregando una oferta de alta conveniencia por volúmenes.';
const vinos = 'Trabajamos con la mayoría de las marcas locales, proporcionando gran cantidad de alternativas en precios, cepas y características.';

const abarrotesBtn = document.getElementById('abarrotes-btn');
const carnesBtn = document.getElementById('carnes-btn');
const licoresBtn = document.getElementById('licores-btn');
const vinosBtn = document.getElementById('vinos-btn');

const imgAbarrotes = document.getElementById('imgAbarrotes');
const imgCarnes= document.getElementById('imgCarnes');
const imgLicores = document.getElementById('imgLicores');
const imgVinos = document.getElementById('imgVinos');

const parrafoGeneral = document.querySelector('#parrafoGeneral');
const parrafoAbarrotes = document.querySelector('#parrafoAbarrotes');
const parrafoCarnes = document.querySelector('#parrafoCarnes');
const parrafoLicores = document.querySelector('#parrafoLicores');
const parrafoVinos = document.querySelector('#parrafoVinos');

function cambioClase() {
    removeClass("producto");
}

abarrotesBtn.addEventListener('click', () => {
    if (document.querySelector('.parrafo').textContent == abarrotes) {
        document.querySelector('.parrafo').textContent = general;
        
        parrafoGeneral.classList.remove('mtp-100');

        parrafoAbarrotes.classList.add('mtp-100');
        parrafoCarnes.classList.add('mtp-100');
        parrafoLicores.classList.add('mtp-100');
        parrafoVinos.classList.add('mtp-100');

        imgAbarrotes.classList.add('producto');
        imgCarnes.classList.add('producto');
        imgLicores.classList.add('producto');
        imgVinos.classList.add('producto');
        // imgAbarrotes.classList.remove('op-000');
    } else {
        document.querySelector('.parrafo').textContent = abarrotes;

        parrafoGeneral.classList.add('mtp-100');

        parrafoAbarrotes.classList.remove('mtp-100');

        parrafoCarnes.classList.add('mtp-100');
        parrafoLicores.classList.add('mtp-100');
        parrafoVinos.classList.add('mtp-100');

        imgAbarrotes.classList.remove('producto');
        imgCarnes.classList.add('producto');
        imgLicores.classList.add('producto');
        imgVinos.classList.add('producto');
    }
})

carnesBtn.addEventListener('click', () => {
    if (document.querySelector('.parrafo').textContent == carnes) {
        document.querySelector('.parrafo').textContent = general;

        parrafoGeneral.classList.remove('mtp-100');

        parrafoAbarrotes.classList.add('mtp-100');
        parrafoCarnes.classList.add('mtp-100');
        parrafoLicores.classList.add('mtp-100');
        parrafoVinos.classList.add('mtp-100');

        imgAbarrotes.classList.add('producto');
        imgCarnes.classList.add('producto');
        imgLicores.classList.add('producto');
        imgVinos.classList.add('producto');
    } else {
        document.querySelector('.parrafo').textContent = carnes;

        parrafoGeneral.classList.add('mtp-100');
        parrafoAbarrotes.classList.add('mtp-100');

        parrafoCarnes.classList.remove('mtp-100');

        parrafoLicores.classList.add('mtp-100');
        parrafoVinos.classList.add('mtp-100');

        imgCarnes.classList.remove('producto');
        imgAbarrotes.classList.add('producto');
        imgLicores.classList.add('producto');
        imgVinos.classList.add('producto');
    }
})

licoresBtn.addEventListener('click', () => {
    if (document.querySelector('.parrafo').textContent == licores) {
        document.querySelector('.parrafo').textContent = general;

        parrafoGeneral.classList.remove('mtp-100');

        parrafoAbarrotes.classList.add('mtp-100');
        parrafoCarnes.classList.add('mtp-100');
        parrafoLicores.classList.add('mtp-100');
        parrafoVinos.classList.add('mtp-100');

        imgAbarrotes.classList.add('producto');
        imgCarnes.classList.add('producto');
        imgLicores.classList.add('producto');
        imgVinos.classList.add('producto');
    } else {
        document.querySelector('.parrafo').textContent = licores;

        parrafoGeneral.classList.add('mtp-100');
        parrafoAbarrotes.classList.add('mtp-100');
        parrafoCarnes.classList.add('mtp-100');

        parrafoLicores.classList.remove('mtp-100');
        
        parrafoVinos.classList.add('mtp-100');

        imgLicores.classList.remove('producto');
        imgAbarrotes.classList.add('producto');
        imgCarnes.classList.add('producto');
        imgVinos.classList.add('producto');
    }
})

vinosBtn.addEventListener('click', () => {
    if (document.querySelector('.parrafo').textContent == vinos) {
        document.querySelector('.parrafo').textContent = general;

        parrafoGeneral.classList.remove('mtp-100');

        parrafoAbarrotes.classList.add('mtp-100');
        parrafoCarnes.classList.add('mtp-100');
        parrafoLicores.classList.add('mtp-100');
        parrafoVinos.classList.add('mtp-100');

        imgAbarrotes.classList.add('producto');
        imgCarnes.classList.add('producto');
        imgLicores.classList.add('producto');
        imgVinos.classList.add('producto');
    } else {
        document.querySelector('.parrafo').textContent = vinos;

        parrafoGeneral.classList.add('mtp-100');
        parrafoAbarrotes.classList.add('mtp-100');
        parrafoCarnes.classList.add('mtp-100');
        parrafoLicores.classList.add('mtp-100');
        
        parrafoVinos.classList.remove('mtp-100');

        imgVinos.classList.remove('producto');
        imgAbarrotes.classList.add('producto');
        imgCarnes.classList.add('producto');
        imgLicores.classList.add('producto');
    }
})
})