document.addEventListener('DOMContentLoaded', function() {
// const parrafo = document.querySelector('.parrafo');
// const abarrotesProd = document.querySelector('.abarrotes');
// const carnesProd = document.querySelector('.carnes');
// const licoresProd = document.querySelector('.licores');
// const vinosProd = document.querySelector('.vinos');


const general = 'GENERAL Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia ullamcorper elementum. Morbi lacinia nunc vel quam feugiat ullamcorper. Sed pulvinar libero ut pellentesque fermentum.';
const abarrotes = 'ABARROTES Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia ullamcorper elementum. Morbi lacinia nunc vel quam feugiat ullamcorper. Sed pulvinar libero ut pellentesque fermentum.';
const carnes = 'CARNES Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia ullamcorper elementum. Morbi lacinia nunc vel quam feugiat ullamcorper. Sed pulvinar libero ut pellentesque fermentum.';
const licores = 'LICORES Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia ullamcorper elementum. Morbi lacinia nunc vel quam feugiat ullamcorper. Sed pulvinar libero ut pellentesque fermentum.';
const vinos = 'VINOS Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia ullamcorper elementum. Morbi lacinia nunc vel quam feugiat ullamcorper. Sed pulvinar libero ut pellentesque fermentum.';

const abarrotesBtn = document.getElementById('abarrotes-btn');
const carnesBtn = document.getElementById('carnes-btn');
const licoresBtn = document.getElementById('licores-btn');
const vinosBtn = document.getElementById('vinos-btn');

function cambioClase() {
    removeClass("producto");
}

abarrotesBtn.addEventListener('click', () => {
    if (document.querySelector('.parrafo').textContent == abarrotes) {
        document.querySelector('.parrafo').textContent = general;
    } else {
        document.querySelector('.parrafo').textContent = abarrotes;
    }
})

carnesBtn.addEventListener('click', () => {
    if (document.querySelector('.parrafo').textContent == carnes) {
        document.querySelector('.parrafo').textContent = general;
    } else {
        document.querySelector('.parrafo').textContent = carnes;
    }
})

licoresBtn.addEventListener('click', () => {
    if (document.querySelector('.parrafo').textContent == licores) {
        document.querySelector('.parrafo').textContent = general;
    } else {
        document.querySelector('.parrafo').textContent = licores;
    }
})

vinosBtn.addEventListener('click', () => {
    if (document.querySelector('.parrafo').textContent == vinos) {
        document.querySelector('.parrafo').textContent = general;
    } else {
        document.querySelector('.parrafo').textContent = vinos;
  
    }
})
})