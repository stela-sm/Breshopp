/**
 * Componente de Footer - Responsável pelo rodapé da página
 * 
 * Funcionalidades:
 * - Validação simples do formulário de newsletter
 * - Animações quando visível
 */

class Footer {
    constructor() {
        this.newsletterForm = document.querySelector('footer form');
        
        if (this.newsletterForm) {
            this.initNewsletter();
        }
        
        this.setupIntersectionObserver();
    }
    
    initNewsletter() {
        this.newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = this.newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value && emailInput.value.includes('@')) {
                // Simular envio
                alert('Obrigado por assinar nossa newsletter!');
                emailInput.value = '';
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
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
        
        document.querySelectorAll('footer [data-animate]').forEach(element => {
            observer.observe(element);
        });
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new Footer();
});