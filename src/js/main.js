const hamburger = document.querySelector('.hamburger');
const mobile = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
const headerSection = document.querySelector('.header-section');
const backToTop =   document.querySelector('.back-to-top');
const browserScreenPosition = window.innerHeight - 300;
const heightWindowTop = '-300';
const animationElements = document.querySelectorAll('.scroll-appear');


const main = () => prepareDOMEvents();

const prepareDOMEvents = () =>{
    hamburger.addEventListener('click', toggleHamburger);
    window.addEventListener('scroll', scrollFunctions);
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


const changeBackground = () =>{
    const hero = document.querySelector('.hero-section');
    const top = hero.getBoundingClientRect().top;

    if(top <= heightWindowTop){
        headerSection.classList.add('header-section--scroll');
        backToTop.classList.add('back-to-top--active');
        
    }else{
        headerSection.classList.remove('header-section--scroll');
        backToTop.classList.remove('back-to-top--active');
    }
}

const scrollAppear = () => {

    animationElements.forEach(element => {
        if(element.getBoundingClientRect().top < browserScreenPosition){
            element.classList.add('animate-left');
        }
    })
}
    

const scrollFunctions = () => {
    changeBackground();
    scrollAppear();
}

window.addEventListener('DOMContentLoaded', main);
