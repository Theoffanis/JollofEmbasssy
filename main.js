
/*=============== TESTIMONIAL SWIPER ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper', {
   loop: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto',
   spaceBetween: 16,
   grabCursor: true,
   speed: 600,
   effect: 'coverflow',
   coverflowEffect:{
      rotate: -90,
      depth: 600,
      modifier: .5,
      slideShadows: false,
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
})


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== ADD SHADOW HEADER ===============*/

/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== SWIPER POPULAR ===============*/
/*const swiperPopular  = new Swiper('.popular__swiper', {
loop: true,
grabCursor: true,
slidesPerView: 'auto',
centeredSlides: 'auto'

})
/*=============== SHOW SCROLL UP ===============*/ 



const scrollUp = () => {
 const scrollUp = document.getElementById("scroll-up")
 this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
               :scrollUp.classList.remove("show-scroll")
    
}
window.addEventListener("scroll" , scrollUp)










/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
