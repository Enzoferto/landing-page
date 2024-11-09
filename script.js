// Detecta los clics en los enlaces de ancla
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        
        // Obtener el destino del ancla (el id del elemento al que se hace referencia)
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            if (targetElement.id == "pricingBox") {
                   // Obtener la posición de la sección a la que queremos desplazarnos
            const targetPosition = targetElement.offsetTop;

            // Ajustar el desplazamiento sumando la altura del header
            window.scrollTo({
                top: (targetPosition - document.getElementById('header').offsetHeight) - 65,
                behavior: 'smooth' // Para un desplazamiento suave
            });
            } else {
                // Obtener la posición de la sección a la que queremos desplazarnos
            const targetPosition = targetElement.offsetTop;

            // Ajustar el desplazamiento sumando la altura del header
            window.scrollTo({
                top: targetPosition - document.getElementById('header').offsetHeight,
                behavior: 'smooth' // Para un desplazamiento suave
            });
            }
            
        }
    });
});

// Seleccionamos el botón de hamburguesa y la barra de navegación
const hamburger = document.getElementById('hamburger-menu');
const navBar = document.getElementById('nav-bar');

// Añadimos un evento de clic al ícono de la hamburguesa
hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');  // Añadimos o quitamos la clase "active"
});

// const iframe = document.querySelector('iframe');
// const videoBox = document.getElementById('videoBox');
// const player = new YT.Player(iframe, {
//     events: {
//         'onStateChange': onPlayerStateChange
//     }
// });