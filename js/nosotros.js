
const divTranslate=document.getElementById('div-translate');
const divRotate=document.getElementById('div-rotate');
const imagen2=document.getElementById('imagen2');
const nosotrosTexto1=document.getElementById('nosotros-texto1');
const nosotrosDaniel=document.getElementById('nosotros-daniel');
const nosotrosDanielFoto=document.getElementById('nosotros-daniel-foto');
const nosotrosContentValores=document.getElementById('nosotros-content-valores');
const navBarLogo=document.getElementById('navbar-logo');
const navBar=document.getElementById('navbar');


window.addEventListener('load',()=>{
    divRotate.classList.add('titulo-nosotros-span-rotate-back');
    divTranslate.classList.add('titulo-nosotros-span-translate-back');
})

/*
const cargarServicio=(entradas,observador)=>{
    entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
            entrada.target.classList.add('derVuelve');
            servicio2.classList.add('derVuelve');
            servicio3.classList.add('derVuelve');
            servicio4.classList.add('derVuelve');
            servicio5.classList.add('derVuelve');
            servicio6.classList.add('derVuelve');
        }
    })
}
*/
const loadText=(entradas,observador2)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
            nosotrosTexto1.classList.add('atras');
            nosotrosDanielFoto.classList.add('atras');
            
        }
        else{
            entrada.target.classList.remove('visible');
            nosotrosTexto1.classList.remove('atras');
            nosotrosDanielFoto.classList.remove('atras');
        }
        
    });
}

const loadDaniel=(entradas,observador2)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('atras');
            nosotrosDaniel.classList.add('atras');
        }
        else{
            entrada.target.classList.remove('atras');
            nosotrosDaniel.classList.remove('atras');
        }
        
    });
}

const loadValores=(entradas,observador4)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('atras');
        }
        else{
            entrada.target.classList.remove('atras');
        }
    });
}

/*
const observador=new IntersectionObserver(cargarServicio,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.3
});
*/
const observador2=new IntersectionObserver(loadText,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.4
});

const observador3=new IntersectionObserver(loadDaniel,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.3
})

const observador4=new IntersectionObserver(loadValores,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.4
}) 
/*
observador.observe(servicio1);
*/
observador2.observe(nosotrosTexto1);
observador3.observe(imagen2)
observador4.observe(nosotrosContentValores);

if(window.innerWidth<991){
    navBar.classList.add('navbar-black');

navBarLogo.innerHTML='<img src="icons/footer.jpeg" width="100px" alt="">';
}