const menu = document.querySelector('#menu-btn');
const navbar= document.querySelector('.header .navbar');


menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})
