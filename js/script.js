//Descrizione:
//Far funzionare lo slider partendo dall’html ricevuto.
//Al click su una freccia, l’immagine mostrata cambia.
//la lista delle thumbs deve essere generata tramite un v-for

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

/**
 * al click sulle frcce su e giu, l immagine principale deve cambiare
 */

const slidesApp = new Vue({
    el: "#app",
    data: {
      lista: slides,
      currentImg: slides[0],
      //rappresenta l indice dell immagine attualmente visualizzaata
      currentIndex: 0,
    },
    methods:{
        onClickImg: function(indiceImg){
            console.log(this.lista[indiceImg])
        },

        changeActiveImg(direction){
            if (direction === "next") {
                // Incremento l'indice.
                // Controllo se l'indice scritto è valido
                this.currentIndex++;
        
                if (this.currentIndex >= this.lisa.length) {
                  this.currentIndex = 0;
                }
              } else if (direction === "prev") {
                this.currentIndex--;
        
                if (this.currentIndex < 0) {
                  this.currentIndex = this.lista.length - 1;
                }
            }
        }
    }
})