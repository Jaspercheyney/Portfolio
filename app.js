const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
     hamburger.classList.toggle('open');
  });
});

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
        console.log('Element is partially visible in screen');
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

window.addEventListener('scroll', debounce(checkPosition));