class Carousel {
    constructor(box) {
        this.box = box;
        this.next = box.querySelector('.next');
        this.prev = box.querySelector('.prev');
        this.items = box.querySelectorAll('.content li');
        this.counter = 0;
        this.amount = this.items.length;
        this.current = this.items[0];
        this.box.classList.add('active');

        
        this.next.addEventListener('click', () => this.navigate(1));
        this.prev.addEventListener('click', () => this.navigate(-1));
        this.navigate(0);
    }

    navigate(direction) {
        this.current.classList.remove('current');
        this.counter += direction;
        if (direction === -1 && 
            this.counter < 0) { 
            this.counter = this.amount - 1; 
        }
        if (direction === 1 && 
            !this.items[this.counter]) { 
            this.counter = 0;
        }
        this.current = this.items[this.counter];
        this.current.classList.add('current');
    }

}

let carBox = new Carousel(document.querySelector('.carouselbox'));