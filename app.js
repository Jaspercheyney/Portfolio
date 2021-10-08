const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Setup our function to run on various events
var handleMenuToggle = function (event) {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle("open");
};

// Add our event listeners
hamburger.addEventListener('click', handleMenuToggle, false);
hamburger.addEventListener('ontouchstart', handleMenuToggle, false);

// Event listener for nav links
document.querySelectorAll('.nav-links li a').forEach(item => {
  item.addEventListener('click', event => {
      handleMenuToggle(event)
  })
})

// get all the elements
elements = document.getElementsByClassName('show-on-scroll');

function checkPosition() {

    for (i = 0; i < elements.length; i++) {
      
      // get the elements position
      var position = elements[i].getBoundingClientRect();
      var positionBottom = position.bottom + 0;
      var positionTop = position.top + 50;

      // checking for partial visibility
      if(positionTop < window.innerHeight && positionBottom >= 0) {
        elements[i].classList.add('is-visible');
      }
  }

}

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

checkPosition()
window.addEventListener('scroll', debounce(checkPosition));

// Dark Mode

// On page load set the theme.

function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark-mode");

    var animationToSun = document.getElementById("animation-to-sun")
    var animationToWhite = document.getElementById("animation-to-white")
    var animationToMoon = document.getElementById("animation-to-moon")
    var animationToBlack = document.getElementById("animation-to-black")

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-mode") {
    localStorage.setItem("theme", "");
      animationToMoon.beginElement();
      animationToBlack.beginElement();
  } else {      
    animationToSun.beginElement();
    animationToWhite.beginElement();
    localStorage.setItem("theme", "dark-mode");
  }
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if ( window.pageYOffset > 0 ){
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar")
        .classList.remove('navbar-hide');
      } else {
            document.getElementById("navbar")
        .classList.add('navbar-hide');
      }
      prevScrollpos = currentScrollPos;
    }
  }

  if (document.body.classList.contains("dark-mode")) {
    document.getElementById("dark-mode-svg").setAttribute("d", "M12 24C18.6274 24 24 18.6274 24 12C24 8.69378 22.6629 5.69986 20.5 3.52946C18.3273 1.34923 15.3212 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z")
    document.getElementById("dark-mode-svg").setAttribute("fill", "#F5F5F7")
  }