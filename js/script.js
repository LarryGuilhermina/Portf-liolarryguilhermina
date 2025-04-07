// Ativa o sistema de tabs com animações suaves
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active das outras abas com fade out
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
            l.style.opacity = '0.7';
        });
        
        // Adiciona active à aba clicada com fade in
        this.classList.add('active');
        this.style.opacity = '1';
        
        // Remove classes ativas das tabs com fade out
        document.querySelectorAll('.tab-pane').forEach(p => {
            p.classList.remove('show', 'active');
            p.style.opacity = '0';
        });
        
        // Adiciona classes ativas à tab selecionada com fade in
        const tabId = this.getAttribute('href');
        const tab = document.querySelector(tabId);
        tab.classList.add('show', 'active');
        tab.style.opacity = '1';
        
        // Adiciona animação de transição suave
        tab.style.transition = 'all 0.3s ease-in-out';
    });
});

// Animação ao rolar com IntersectionObserver
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animação suave de entrada
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Adiciona efeito de pulso suave
            entry.target.classList.add('pulse');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa elementos com fade-in
document.querySelectorAll('.fade-in').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(element);
});

// Adiciona interatividade aos links sociais
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'all 0.3s ease';
    });
});

// Adiciona efeito hover ao botão CV
document.querySelector('.btn-cv').addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.3)';
    this.style.transition = 'all 0.3s ease';
});

document.querySelector('.btn-cv').addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
    this.style.transition = 'all 0.3s ease';
});

// Adiciona efeito de carregamento suave
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 1s ease-in';
});