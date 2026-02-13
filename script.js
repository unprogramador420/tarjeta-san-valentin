document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const envelope = document.querySelector('.envelope');

    openBtn.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            openBtn.textContent = '¡Te Amo!';
            openBtn.style.backgroundColor = '#d63031'; // Cambia a un color mas oscuro
            createHearts();
        } else {
            // Opcional: Cerrar la carta si se vuelve a clicar (aunque el texto cambia)
            // envelope.classList.remove('open');
            // openBtn.textContent = 'Abrir Carta';
        }
    });

    // Función para crear corazones flotantes
    function createHearts() {
        const interval = setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '❤️';

            // Posición aleatoria horizontal
            heart.style.left = Math.random() * 100 + 'vw';

            // Tamaño aleatorio
            const size = Math.random() * 20 + 10;
            heart.style.fontSize = size + 'px';

            // Duración de la animación aleatoria
            const duration = Math.random() * 3 + 3; // Entre 3 y 6 segundos
            heart.style.animationDuration = duration + 's';

            document.body.appendChild(heart);

            // Eliminar el corazón después de la animación
            setTimeout(() => {
                heart.remove();
            }, duration * 1000);

        }, 300); // Crear un corazón cada 300ms

        // Detener la creación de corazones después de unos segundos (opcional)
        // setTimeout(() => clearInterval(interval), 10000); 
    }

    // Iniciar con algunos corazones suaves al cargar
    // createHearts(); // Descomentar si quieres corazones desde el inicio

    // Interacción con la ardilla escondida
    const hiddenSquirrel = document.getElementById('hiddenSquirrel');

    hiddenSquirrel.addEventListener('click', () => {
        hiddenSquirrel.classList.add('found');
        alert("¡Encontraste a la ardilla escondida! 🐿️💖");
        createHearts(); // Lluvia de corazones extra

        // Quitar la clase después de la animación para que pueda saltar de nuevo
        setTimeout(() => {
            hiddenSquirrel.classList.remove('found');
        }, 1000);
    });
});

