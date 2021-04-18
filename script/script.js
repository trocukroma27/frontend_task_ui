const burger = document.getElementById('header__burger');
const navHeader = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navHeader.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.remove('active');
        navHeader.classList.remove('active');
    });
});


let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let slides = document.querySelectorAll('.slider__item');
    let dots = document.querySelectorAll('.slider__dot');

    if(n >= slides.length){
        slideIndex = 0;
    }
    if(n < 0){
        slideIndex = slides.length - 1;
    }
    
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(let i = 0; i < dots.length; i++){
        dots[i].classList.remove('active');
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add('active');
}