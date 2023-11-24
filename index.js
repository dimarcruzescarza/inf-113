// Obtén todas las imágenes de la galería
const images = document.querySelectorAll('.image img');

// Agrega un evento clic a cada imagen
images.forEach(image => {
    image.addEventListener('click', openLightbox);
});

// Función para abrir el lightbox
function openLightbox(event) {
    // Crea un elemento div para el lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';

    // Crea una imagen en el lightbox
    const lightboxImage = document.createElement('img');
    lightboxImage.src = event.target.src;
    lightbox.appendChild(lightboxImage);

    // Agrega el lightbox al cuerpo del documento
    document.body.appendChild(lightbox);

    // Agrega un evento clic al lightbox para cerrarlo
    lightbox.addEventListener('click', closeLightbox);
}

// Función para cerrar el lightbox
function closeLightbox(event) {
    if (event.target.className === 'lightbox') {
        event.target.remove();
    }
}
