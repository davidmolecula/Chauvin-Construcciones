// Definimos un objeto que mapea los ID de las imágenes con sus URLs correspondientes
const projectURLs = {
    "image-box-1": "Projects/Projects_Azul.html",
    "image-box-3": "Projects/Projects_Las_Margaritas.html",
    "image-box-2": "Projects/Projects_Las_Prunas.html"
};


// Obtenemos todas las imágenes de proyecto por su clase "image-box"
const imageBoxes = document.querySelectorAll('.image-box');

// Función para redirigir a la página correspondiente al hacer clic en una imagen de proyecto
function redirectToProjectPage(event) {
    // Obtenemos el ID del elemento clicado para identificar el proyecto
    const projectId = event.currentTarget.id;
    // Obtenemos la URL correspondiente al proyecto desde el objeto projectURLs
    const projectURL = projectURLs[projectId];

    // Redirigimos a la página del proyecto con la URL obtenida
    window.location.href = projectURL;
}

// Agregamos un event listener a cada imagen de proyecto para capturar el clic
imageBoxes.forEach(imageBox => {
    imageBox.addEventListener('click', redirectToProjectPage);
});






const grayscaleImages = document.querySelectorAll('.grayscale');

// Función para aplicar el filtro de blanco y negro a la imagen
function applyGrayscale(event) {
  const image = event.target;
  image.style.filter = 'grayscale(100%)';
}

// Función para quitar el filtro de blanco y negro de la imagen
function removeGrayscale(event) {
  const image = event.target;
  image.style.filter = 'none';
}

// Agregar eventos para detectar cuando el ratón entra y sale de la imagen
grayscaleImages.forEach(image => {
  image.addEventListener('mouseenter',removeGrayscale); 
  image.addEventListener('mouseleave',applyGrayscale);
});








// Obtenemos todos los elementos que deseamos animar
const elementsToAnimate = document.querySelectorAll('.project-image, .project-description');

// Función para determinar si un elemento está visible en la ventana del navegador
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para aplicar la animación a los elementos que están visibles
function animateElementsOnScroll() {
    elementsToAnimate.forEach(element => {
        if (isElementVisible(element)) {
            element.classList.add('visible');
        }
    });
}

// Llamamos a la función inicialmente para animar los elementos que ya están visibles
animateElementsOnScroll();

// Agregamos un event listener al scroll para animar los elementos a medida que se hacen visibles
window.addEventListener('scroll', animateElementsOnScroll);

