/**
 * Scripts específicos da página Home
 * 
 * Funcionalidades:
 * - Inicialização do Swiper
 * - Contador regressivo
 * - Animações quando visível
 * - Configurações específicas da home
 */

class HomePage {
    constructor() {
        this.initSwiper();
        this.startCountdown();
        this.setupIntersectionObserver();
    }
    
    initSwiper() {
        if (document.querySelector('.donationSwiper')) {
            new Swiper('.donationSwiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });
        }
    }
    
    startCountdown() {
        const timerElement = document.getElementById('countdown-timer');
        if (!timerElement) return;
        
        let hours = 48;
        let minutes = 0;
        let seconds = 0;
        
        const timer = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                clearInterval(timer);
            }
            
            timerElement.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    
                    // Adicionar atrasos para animações em sequência
                    if (entry.target.classList.contains('animate-sequence')) {
                        const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 0.1}s`;
                    }
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Observar elementos com data-animate
        document.querySelectorAll('[data-animate]:not(footer [data-animate])').forEach(element => {
            observer.observe(element);
        });
        
        // Observar elementos em sequência (features)
        document.querySelectorAll('.features-section > div > div').forEach((element, index) => {
            element.classList.add('animate-sequence');
            element.style.setProperty('--delay', `${index * 0.1}s`);
            observer.observe(element);
        });
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new HomePage();
});