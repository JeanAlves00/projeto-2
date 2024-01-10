document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');
    const animatedText = document.querySelector('.animated-text');
    const header = document.querySelector('header');

    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.classList.add('loaded');
    }, 3000); // Tempo da animação inicial em milissegundos

    setTimeout(() => {
        header.style.display = 'block';
    }, 3500); // Tempo da animação inicial + tempo da animação do texto
});