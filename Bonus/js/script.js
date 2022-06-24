// Descrizione:
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.

// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

var app = new Vue({
    el: '#root',
    data: {
         currentElement: 0,
         autoPaly : null,
         slides : [
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
            },
        ],  
    },
        // all'avvio parte un auto play delle immagini
        mounted(){
          this.startAutoPlay()
        },

        methods : {
            // funzione per adare avanti nella foto
            nextImage(){
                if(this.currentElement < this.slides.length - 1) {
                
                    this.currentElement++;
                 }else{
                    this.currentElement = 0
                 }
            },
            // funzione per tornare indetro nelle foto
            prevImage(){
                if(this.currentElement > 0) {
                
                    this.currentElement--;
                 }else{
                    this.currentElement = this.slides.length - 1                 }
            },
            // funzione per far apparire l'immagine al click su una Thumb
            showImage(index){
                this.currentElement = index;
            },
            // funzione per avviare lo scorrimento delle Thumb in auto 
            startAutoPlay(){
                this.autoPaly = setInterval(this.nextImage , 3000);
            },
            // funzione per stoppare lo scorrimento delle Thumb al massaggio delmouse sopra 
            stopAutoPlay(){
             clearInterval(this.autoPaly);

            },
        }        
  }) 
  