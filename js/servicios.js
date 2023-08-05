
const serviciosContentPrimero=document.getElementById('servicios-content-primero');




window.addEventListener('load',()=>{
    divRotate.classList.add('titulo-nosotros-span-rotate-back');
    divTranslate.classList.add('titulo-nosotros-span-translate-back');
})


const loadService=(entradas,observador)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('servicios-content-back');

            
        }
        else{
            entrada.target.classList.remove('servicios-content-back');
            
        }
        
    });
}




const observador=new IntersectionObserver(loadService,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.4
});


/*
observador.observe(servicio1);
*/
observador.observe(serviciosContentPrimero);


if(window.innerWidth<991){
    navBar.classList.add('navbar-black');

navBarLogo.innerHTML='<img src="icons/footer.jpeg" width="100px" alt="">';
}