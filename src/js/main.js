const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
const main = () => prepareDOMEvents();

const prepareDOMEvents = () =>{
    hamburger.addEventListener('click', toggleHamburger);
}


const toggleHamburger = () => {
    hamburger.classList.toggle('hamburger--active');
    mobileMenu();
}


const mobileMenu = () => {
    if(hamburger.classList.contains('hamburger--active')){
        mobile.classList.add('mobile-menu--active');
    }else{
        mobile.classList.remove('mobile-menu--active');
    }
}


for(let link of mobileMenuLinks){
    link.addEventListener('click', function(){
        toggleHamburger();
    })
}






window.addEventListener('DOMContentLoaded', main);
