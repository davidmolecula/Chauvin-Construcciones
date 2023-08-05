


// Definimos un objeto que mapea los ID de las imágenes con sus URLs correspondientes

/*---------*/
const projectURLs = {
    "image-box-1": "Projects/Projects_Azul.html",
    "image-box-3": "Projects/Projects_Las_Margaritas.html",
    "image-box-2": "Projects/Projects_Las_Prunas.html",
    "image-box-6": "Projects/Projects_Romito.html",
    "image-box-4": "Projects/Projects_Mar_Chiquita.html",
    "image-box-5": "Projects/Projects_Mar_Chiquita.html"

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

/*---------*/


/*---------*/

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

/*---------*/



/*---------*/

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


/*---------*/


//<![CDATA[ esto es de la barra de carga 
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        console.log(document.readyState);
        document.getElementById("PreLoaderBar").style.display = "none";
    }
}
//]]>




/*---------*/

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
                window.location.href = "../projects.html"; 
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
                    redirectToAnotherPageWithDelay(1000);
                }
            } else {
                reachedEndOfPage = false;
                cancelRedirect();
            }
        });

/*---------*/

/*---------*/
// Función para verificar si un elemento está en el viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Función para activar la animación de deslizamiento al aparecer en el viewport
function activateImageAnimations() {
    var images = document.querySelectorAll('.imagen_animada');
    images.forEach(function (image) {
        if (isElementInViewport(image)) {
            image.classList.add('animate');
        }
    });
}

// Evento para activar la animación al hacer scroll
window.addEventListener('scroll', function () {
    activateImageAnimations();
});

// Evento para activar la animación al cargar la página
window.addEventListener('load', function () {
    activateImageAnimations();
});


/*---------*/
/*---------*/

// Función para verificar si un elemento está en el viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Función para activar la animación de deslizamiento al aparecer en el viewport
function activateAnimation(element) {
    element.classList.add('animate');
}

// Opciones para el Intersection Observer
const options = {
    root: null, // El root es el viewport
    rootMargin: '0px',
    threshold: 0.1 // El umbral de intersección
};

// Elementos a animar
var itemInfo = document.querySelector('.item__info');
var itemBlock = document.querySelector('#titulo2');
var itemBlock2 = document.querySelector('#titulo');
var itemImg = document.querySelector('#imagen_1');
var itemImg2 = document.querySelector('#imagen_2');
var itemImg3 = document.querySelector('#imagen_3');
var itemImg4 = document.querySelector('#imagen_4');
var itemImg5 = document.querySelector('#imagen_5');
var nombre = document.querySelector('#nombre');
// Callback del Intersection Observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            activateAnimation(entry.target);
            observer.unobserve(entry.target); // Dejar de observar una vez que se ha animado
        }
    });
}

// Crear el Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observar los elementos
observer.observe(itemInfo);
observer.observe(itemBlock);

observer.observe(nombre);
observer.observe(itemImg);
observer.observe(itemImg2);
observer.observe(itemImg3);
observer.observe(itemImg4);
observer.observe(itemImg5);
observer.observe(itemBlock2);
/*---------*/
/*---------*/




/*---------*/


