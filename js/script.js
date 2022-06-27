var app = new Vue({
    el: '#app',
    data: {
        timer: null,
        currentElement: 0,
        slides: [
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
    ]
    },
    methods: {
        showPreElement() {
            if(this.currentElement === 0) {
                this.currentElement = this.slides.length -1;
            } else {
                this.currentElement--;
            }
        },
        showNextElement() {
            if(this.currentElement === this.slides.length -1) {
                this.currentElement = 0;
            } else {
                this.currentElement++;
            }
        },
        showThisElement(index) {
            this.currentElement = index;
        },
        stopAutoPlay() {
            clearInterval(timer);
        },
        startAutoPlay() {
            setInterval(this.showNextElement, 3000);
        }
    },
    mounted() {
        timer = setInterval(this.showNextElement, 3000);
        setInterval(timer, 3000);
    }
});
