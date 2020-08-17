const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
hamburger.addEventListener("clickHandler", () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
     hamburger.classList.toggle('open');
  });
});