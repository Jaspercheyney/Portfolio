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

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-mode") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark-mode");
  }
}