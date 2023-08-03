// Definimos un objeto que mapea los ID de las imágenes con sus URLs correspondientes
const projectURLs = {
    "image-box-1": "Projects/Projects_Azul.html",
    "image-box-3": "Projects/Projects_Las_Margaritas.html",
    "image-box-2": "Projects/Projects_Las_Prunas.html",
    "image-box-6": "Projects/Projects_Romito.html",
    "image-box-4": "Projects/Projects_Mar_Chiquita.html",
    "image-box-5": "Projects/Projects_3.html"

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











let reachedEndOfPage = false;
        let redirectTimeout;
        let loaderElement = document.getElementById("loader");

        function showProgressBar() {
            const progressBarContainer = document.querySelector(".progress-container");
            progressBarContainer.style.display = "block";
        }

        function hideProgressBar() {
            const progressBarContainer = document.querySelector(".progress-container");
            progressBarContainer.style.display = "none";
        }

        function redirectToAnotherPageWithDelay(delayTime) {
            loaderElement.classList.add("loader2"); // Iniciar animación del loader
            redirectTimeout = setTimeout(function () {
                window.location.href = "../projects.html"; // Aquí cambia "otra-pagina.html" por la URL de la página a la que quieres redirigir.
            }, delayTime);
        }

        function cancelRedirect() {
            clearTimeout(redirectTimeout);
            reachedEndOfPage = false;
            hideProgressBar();
        }

        // Evento de scroll para verificar si ha llegado al pie de página
        window.addEventListener("scroll", function () {
            const footer = document.getElementById("footer");
            const footerPosition = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerPosition <= windowHeight + 1) {
                if (!reachedEndOfPage) {
                    reachedEndOfPage = true;
                    showProgressBar();
                    redirectToAnotherPageWithDelay(4000);
                }
            } else {
                reachedEndOfPage = false;
                cancelRedirect();
            }
        });




      // Función para verificar si un elemento está en el viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para agregar la clase 'aos-animate' a las imágenes cuando estén en el viewport
function animateImagesOnScroll() {
  const images = document.querySelectorAll('.animate-image');
  images.forEach(image => {
      if (isElementInViewport(image)) {
          image.classList.add('aos-animate');
      }
  });
}

// Agregar un evento para activar la animación al cargar la página y cuando se haga scroll
document.addEventListener('DOMContentLoaded', animateImagesOnScroll);
window.addEventListener('scroll', animateImagesOnScroll);

      