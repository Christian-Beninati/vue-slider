// console.log('JS OK')

// # OPERAZIONI INIZIALI•••••••••••••••••

// Recupero la gallery dal DOM
const gallery = document.querySelector(' .gallery');
// Recupero previous e next dal DOM
const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')


// Preparo le immagini (indirizzi delle immagini)
let imageSources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Preparo l'HTML per le immagini
let imageElements = ' ';

// Creo un tag img per ogni imageSorces
for ( let i = 0; i  <  imageSources.length; i ++) {
    imageElements += `<img src= "${imageSources[i]}" alt="figures ${i + 1}" >`;
}

// Inserisco le immagini nel DOM
gallery.innerHTML = imageElements;

// Recupero tutte le immagini 
const images = document.querySelectorAll('#carousel img')

// Preparo la gestione dell'index
let currentIndex = 0;

// Imposto la prima immagine come quella attiva (di partenza)
images[currentIndex].classList.add('active');


//  # LOGICA PRINCIPALE•••••••••••••••••••••••

// Metto in ascolto il previous
previousButton.addEventListener('click', function () {
    
    // Rimuovo la classe active all'immagine corrispondente al currentIndex
    images[currentIndex].classList.remove('active');

    // Decremento il current index
    currentIndex--;

    // Se currentIndex diventa un valore negativo, lo imposto all'ultima immagine
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Aggiungo la classe active all'immagine corrispondente al nuovo currentIndex
    images[currentIndex].classList.add('active');
   
});


// Metto in ascolto il next
nextButton.addEventListener('click', function () {
    
    // Rimuovo la classe active all'immagine corrispondente al currentIndex
    images[currentIndex].classList.remove('active');

    // incrementoo il current index
    currentIndex++;

    // Se currentIndex supera l'indice dell'ultima immagine, lo imposto alla prima immagine
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Aggiungo la classe active all'immagine corrispondente al nuovo currentIndex
    images[currentIndex].classList.add('active');
});
