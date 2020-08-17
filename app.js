const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
     hamburger.classList.toggle('open');
  });
});