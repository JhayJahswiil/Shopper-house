// DOM ELEMENTS
// we created variables for our HTML classes
const bars = document.querySelector('.hamburger__menu');
const navMenu = document.querySelector('.ul')

// HAMBURGER DOM IMPLEMENTATION

// bars event listener that will respond to a 'click' event
bars.addEventListener('click', function(){
    navMenu.classList.toggle('open');
})

// So when the bar/hamburger is clicked, the code in the function runs.

// So the code in the function is meant to toggle between the '.nav__menu .open' class we created at 800px in the media query. 

// When we click at the bar, it adds the class to the '.nav__menu' and when we click again, it removes the class.