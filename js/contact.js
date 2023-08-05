
const divTranslate=document.getElementById('div-translate');
const divRotate=document.getElementById('div-rotate');



const navBarLogo=document.getElementById('navbar-logo');
const navBar=document.getElementById('navbar');


window.addEventListener('load',()=>{
    divRotate.classList.add('titulo-nosotros-span-rotate-back');
    divTranslate.classList.add('titulo-nosotros-span-translate-back');
})



if(window.innerWidth<991){
    navBar.classList.add('navbar-black');

navBarLogo.innerHTML='<img src="icons/footer.jpeg" width="100px" alt="">';
}