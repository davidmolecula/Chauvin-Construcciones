const navBar=document.getElementById('navbar');
const navBarLogo=document.getElementById('navbar-logo');

if(window.innerWidth<991){
    navBar.classList.add('navbar-black');
    navBar.classList.remove('bg-light');
}