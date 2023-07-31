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








const elementsToAnimate = document.querySelectorAll('.project-image, .project-description');

function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const offset = 150; // Ajustamos el desplazamiento antes de que los elementos sean considerados visibles
    return (
        rect.top >= -offset &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateElementsOnScroll() {
    elementsToAnimate.forEach(element => {
        if (isElementVisible(element)) {
            element.classList.add('visible');
        }
    });
}

// Llamamos a la función inicialmente para animar los elementos que ya están visibles
animateElementsOnScroll();

window.addEventListener('scroll', animateElementsOnScroll);





 // Variables para controlar la redirección
 let reachedEndOfPage = false;
 let redirectTimeout;

 // Función para redirigir a otra página después de un tiempo especificado
 function redirectToAnotherPageWithDelay(delayTime) {
   redirectTimeout = setTimeout(function () {
     // Aquí cambia "otra-pagina.html" por la URL de la página a la que quieres redirigir.
     window.location.href = "../projects.html";
   }, delayTime);
 }

 // Función para cancelar la redirección si el usuario se desplaza hacia arriba
 function cancelRedirect() {
   clearTimeout(redirectTimeout);
   reachedEndOfPage = false;
 }

 // Evento de scroll para verificar si ha llegado al pie de página
 window.addEventListener("scroll", function () {
   const footer = document.getElementById("footer");
   const footerPosition = footer.getBoundingClientRect().top;
   const windowHeight = window.innerHeight;

   // Ajusta 50 al número de píxeles que desees que falten para llegar al pie de página.
   if (footerPosition <= windowHeight + 50) {
     // Solo redirigir si se ha alcanzado el final de la página y no hay una redirección pendiente
     if (!reachedEndOfPage) {
       reachedEndOfPage = true;
       // Establece el tiempo de espera en milisegundos (por ejemplo, 5000 para 5 segundos)
       redirectToAnotherPageWithDelay(5000);
     }
   } else {
     // Restablecer la bandera cuando se aleja del pie de página
     cancelRedirect();
   }

   // Verificar si el usuario está haciendo scroll hacia arriba y cancelar la redirección
   const currentScrollPosition =
     window.pageYOffset || document.documentElement.scrollTop;
   if (currentScrollPosition < prevScrollPosition) {
     cancelRedirect();
   }
   prevScrollPosition = currentScrollPosition;
 });