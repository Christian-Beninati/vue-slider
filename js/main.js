console.log('Vue OK', Vue);

// Estrapolo il metodo creatApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    data(){               
        return{
            // Autoplay
            autoplay: null,
            // current Index
            currentIndex: 0,
            // Array di oggetti
            images: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },

    computed: {
        // ultima image
        isLasttPicture(){
            return this.currentIndex === this.images.length - 1 
        }
    },

    methods:{
        // Metodo (funzione) (next image infinito)
        goToNext(){
            if (this.isLasttPicture) {
                this.currentIndex = 0;
              } else {
                this.currentIndex++;
              }
        },
        // Metodo (funzione) (previous image infinito)
        goToPrevious(){
            if (this.currentIndex === 0) {
                this.currentIndex = this.images.length - 1;
              } else {
                this.currentIndex--;
              }
        },

        
        // Metodo (funzione) Thumbnails image (setto il current index)
        setCurrentIndex(targetIndex) {
            this.currentIndex = targetIndex;
        },

        // Metodo (funzione) Stop Autoplay (per thumbnails e button next e prev.)
        stopAutoplay() {
            clearInterval(this.autoplay);
        },

        // Metodo (funzione) riavvio Autoplay (per thumbnails e button next a prev.)
        startAutoplay(){
            this.autoplay = setInterval(this.goToNext, 3000);
        }
    },

    // LifeCycle Methods, si attiva all'invio della pagina
    // invoco Autoplay
    mounted(){
        this.startAutoplay();
    }
});

// Monto nell'elemento (di partenza)
app.mount('#root');

