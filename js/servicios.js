
const serviciosContentPrimero=document.getElementById('servicios-content-primero');
const serviciosContentFaq=document.getElementById('servicios-content-faq');


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

const loadFaq=(entradas,observadorFaq)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('servicios-faq-back');

            
        }
        else{
            entrada.target.classList.remove('servicios-faq-back');
            
        }
        
    });
}



const observador=new IntersectionObserver(loadService,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.4
});


const observadorFaq=new IntersectionObserver(loadFaq,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.4
});


/*
observador.observe(servicio1);
*/
observador.observe(serviciosContentPrimero);
observadorFaq.observe(serviciosContentFaq);


if(window.innerWidth<991){
    navBar.classList.add('navbar-black');

navBarLogo.innerHTML='<img src="icons/footer.jpeg" width="100px" alt="">';
}