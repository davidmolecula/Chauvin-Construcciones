const navBar=document.getElementById('navbar');
const caption1=document.getElementById('caption1');
const caption2=document.getElementById('caption2');
const caption3=document.getElementById('caption3');
const navBarLogo=document.getElementById('navbar-logo');
let i;


if(window.innerWidth<991){
    navBar.classList.add('navbar-black');

    caption1.innerHTML=`<div class="carousel-caption-hover">
    Lider en construcción + 30 años.<br> Nos especializamos en la creacion
    de construcciones
        basadas en arquitectura sustentable.
</div>`;
caption2.innerHTML=`<div class="carousel-caption-hover ">
Una transformación en el diseño de viviendas.
</div>`;
caption3.innerHTML=`<div class="carousel-caption-hover ">
Con la sostenibilidad ambiental, Social y económica como eje.
</div>`;
navBarLogo.innerHTML='<img src="icons/footer.jpeg" width="100px" alt="">';
}
