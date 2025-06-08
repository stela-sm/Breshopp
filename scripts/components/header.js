/**
 * Componente de Header - Responsável pela navegação principal
 * 
 * Funcionalidades:
 * - Menu mobile responsivo
 * - Barra de pesquisa
 * - Scroll behavior do header
 * - Navegação suave
 */

class Header {
    constructor() {
        this.header = document.querySelector('header');
        this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.mobileOverlay = document.getElementById('mobile-overlay');
        this.searchToggle = document.getElementById('search-toggle');
        this.searchBar = document.getElementById('search-bar');
        this.searchClose = document.getElementById('search-close');
        this.lastScroll = 0;
        
        this.init();
    }
    
    init() {
        // Menu mobile
        this.mobileMenuToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
        this.mobileOverlay.addEventListener('click', this.closeMobileMenu.bind(this));
        
        // Barra de pesquisa
        this.searchToggle.addEventListener('click', this.toggleSearchBar.bind(this));
        this.searchClose.addEventListener('click', this.closeSearchBar.bind(this));
        
        // Scroll behavior
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        // Navegação suave
        this.setupSmoothScrolling();
        
        // Observador de interseção para animações
        this.setupIntersectionObserver();
    }
    
    toggleMobileMenu() {
        this.mobileMenu.classList.toggle('hidden');
        this.mobileOverlay.classList.toggle('hidden');
        document.body.style.overflow = this.mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
        
        // Mudar ícone
        const icon = this.mobileMenuToggle.querySelector('i');
        if (this.mobileMenu.classList.contains('hidden')) {
            icon.classList.replace('fa-times', 'fa-bars');
        } else {
            icon.classList.replace('fa-bars', 'fa-times');
        }
    }
    
    closeMobileMenu() {
        this.mobileMenu.classList.add('hidden');
        this.mobileOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
        
        // Resetar ícone
        const icon = this.mobileMenuToggle.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
    }
    
    // toggleSearchBar() {
    //     this.searchBar.classList.toggle('hidden');
        
    //     if (!this.searchBar.classList.contains('hidden')) {
    //         document.getElementById('search-input').focus();
    //     }
    // }
    
    // closeSearchBar() {
    //     this.searchBar.classList.add('hidden');
    // }
    
    handleScroll() {
        const currentScroll = window.scrollY;
        
        if (currentScroll <= 100 || currentScroll < this.lastScroll) {
            this.header.style.transform = 'translateY(0)';
        } else {
            this.header.style.transform = 'translateY(-100%)';
        }
        
        this.lastScroll = currentScroll;
    }
    
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Fechar menu mobile se estiver aberto
                    if (!document.getElementById('mobile-menu').classList.contains('hidden')) {
                        document.getElementById('mobile-menu').classList.add('hidden');
                        document.getElementById('mobile-overlay').classList.add('hidden');
                        document.body.style.overflow = 'auto';
                        
                        // Resetar ícone
                        const icon = document.getElementById('mobile-menu-toggle').querySelector('i');
                        icon.classList.replace('fa-times', 'fa-bars');
                    }
                    
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.1
        });
        
        document.querySelectorAll('[data-animate]').forEach(element => {
            observer.observe(element);
        });
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new Header();
});