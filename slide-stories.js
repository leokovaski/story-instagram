function typeWrite(elemento){
    if (elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ' ';
        textoArray.forEach(function(letra, i){   
            setTimeout(function(){
                elemento.innerHTML += letra;
            }, 75 * i)
        });
    }
}
const titulo = document.querySelector('.titulo-principal');

function handleFeedback(action) {
    // Seleciona o elemento que contém os botões e o texto de feedback
    const feedbackContainer = document.getElementById('feedback-container');

    // Verifica a ação (like ou dislike) e atualiza o conteúdo do container
    if (action === 'like' || action === 'dislike') {
        feedbackContainer.innerHTML = '<h1>Obrigado! :)</h1>';
    }
}

class SlideStories {
    /** @param {string} id */
    constructor(id) {
        this.slide = document.querySelector(`[data-slide=${id}]`)
        this.active = 0
        this.init()
    }

    /** @param {Number} index */
    activeSlide(index) {
        this.active = index
        this.items.forEach((item) => item.classList.remove('active'))
        this.items[index].classList.add('active')
        this.thumbItems.forEach((item) => item.classList.remove('active'))
        this.thumbItems[index].classList.add('active')
        this.autoSlide()
        const titulo = this.items[index].querySelector('.titulo-principal');
        typeWrite(titulo);
    }

    next() {
        // Verifica se o slide atual é o último
        if (this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1);
        } else {
            
        }
    }

    prev() {
        if (this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next')
        const prevBtn = this.slide.querySelector('.slide-prev')
        nextBtn.addEventListener('click', this.next)
        prevBtn.addEventListener('click', this.prev)
    }

    addThumbItems() {
        this.items.forEach(() => (this.thumb.innerHTML += `<span class="slide-thumb-item"></span>`))
        this.thumbItems = Array.from(this.thumb.children)
    }

    autoSlide() {
        clearTimeout(this.timeout)
        this.timeout = setTimeout(this.next, 6000)
    }

    init() {
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.items = this.slide.querySelectorAll('.slide-items > *')
        this.thumb = this.slide.querySelector('.slide-thumbs')
        this.addThumbItems()
        this.activeSlide(0)
        this.addNavigation()
    }
}

new SlideStories('slide')
