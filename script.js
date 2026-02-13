document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const envelope = document.querySelector('.envelope');

    openBtn.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            openBtn.textContent = '¡Te Quiero!';
            openBtn.style.backgroundColor = '#fd746c'; // Cambia a Sunset Pink
            createStars();
        } else {
            // Opcional: Cerrar la carta si se vuelve a clicar (aunque el texto cambia)
            // envelope.classList.remove('open');
            // openBtn.textContent = 'Abrir Carta';
        }
    });

    // Función para crear estrellas/cometas flotantes
    function createStars() {
        const interval = setInterval(() => {
            const star = document.createElement('div');
            star.classList.add('floating-star');
            // Randomly choose between star and comet
            star.innerHTML = Math.random() > 0.7 ? '☄️' : '⭐';

            // Posición aleatoria horizontal
            star.style.left = Math.random() * 100 + 'vw';

            // Tamaño aleatorio
            const size = Math.random() * 15 + 10;
            star.style.fontSize = size + 'px';

            // Duración de la animación aleatoria
            const duration = Math.random() * 3 + 3; // Entre 3 y 6 segundos
            star.style.animationDuration = duration + 's';

            document.body.appendChild(star);

            // Eliminar después de la animación
            setTimeout(() => {
                star.remove();
            }, duration * 1000);

        }, 300); // Crear una estrella cada 300ms
    }

    // Iniciar con algunos corazones suaves al cargar
    // createHearts(); // Descomentar si quieres corazones desde el inicio


});
