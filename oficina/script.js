window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const horizontalScroll = document.querySelector('.horizontal-scroll');

    if (scrollPosition > windowHeight * 0.5) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }

    // Ajusta el ancho del contenedor en función del scroll
    const newWidth = 100 + (scrollPosition / windowHeight) * 300; // Ajusta el factor según sea necesario
    if (newWidth <= 400) { // Asegúrate de que el ancho no sea menor que el necesario para mostrar todas las secciones
        horizontalScroll.style.width = `${newWidth}vw`;
    }
});