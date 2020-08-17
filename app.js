const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
     hamburger.classList.toggle('open');
  });
});


var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

$(".send-report").bind(clickHandler, function(e) {
    alert("clicked or tapped. This button used: " + clickHandler);
});