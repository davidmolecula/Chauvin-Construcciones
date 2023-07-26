
const servicio1=document.getElementById('servicio1');
const servicio2=document.getElementById('servicio2');
const servicio3=document.getElementById('servicio3');
const servicio4=document.getElementById('servicio4');
const servicio5=document.getElementById('servicio5');
const servicio6=document.getElementById('servicio6');
const imagen2=document.getElementById('imagen2');
const texto1=document.getElementById('texto1');
const teamHeader=document.getElementById('section-team-header');



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

const cargarImagen=(entradas,observador2)=>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            console.log('visible');
            entrada.target.classList.add('visible');
            texto1.classList.add('atras');
            teamHeader.classList.add('atras');
        }
        
    });
}



const observador=new IntersectionObserver(cargarServicio,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.3
});

const observador2=new IntersectionObserver(cargarImagen,{
    root:null,
    rootMargin: '0px 0px 0px 0px',
    threshold:.3
});


observador.observe(servicio1);
observador2.observe(texto1);


