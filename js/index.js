const navBar=document.getElementById('navbar');
const caption1=document.getElementById('caption1');
let i;


if(window.innerWidth<991){
    navBar.classList.add('navbar-black');

    caption1.innerHTML=`<div class="carousel-caption-hover">
    Lider en construcción + 30 años.<br> Nos especializamos en la creacion
    de construcciones
        basadas en arquitectura sustentable.
</div>`;
}