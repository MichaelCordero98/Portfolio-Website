// Button Functions

let homeBtn = document.getElementsByName('home-button')[0];
let navBtns = document.getElementsByClassName('nav-items');
let navToggle = document.getElementsByClassName('nav-toggle')[0];

// Home Portfolio Button Navigation --------------------------------------------
homeBtn.addEventListener('click', function() {
  let body = document.body.getBoundingClientRect();
  let coordinate = document.getElementsByClassName('portfolio-content')[0].getBoundingClientRect();
  let y = coordinate.y - body.y;
  window.scrollTo({ top: y, left: 0, behavior: 'smooth'});
})

// Toggle Menu Buttons Navigation ----------------------------------------------

navBtns[0].addEventListener('click', function() { // Home
  navToggle.checked = !navToggle.checked;
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
})

navBtns[1].addEventListener('click', function() { // About
  navToggle.checked = !navToggle.checked;
  let body = document.body.getBoundingClientRect();
  let coordinate = document.getElementsByClassName('about-content')[0].getBoundingClientRect();
  let y = coordinate.y - body.y;
  window.scrollTo({ top: y, left: 0, behavior: 'smooth'});
})

navBtns[2].addEventListener('click', function() { // Portfolio
  navToggle.checked = !navToggle.checked;
  let body = document.body.getBoundingClientRect();
  let coordinate = document.getElementsByClassName('portfolio-content')[0].getBoundingClientRect();
  let y = coordinate.y - body.y;
  window.scrollTo({ top: y, left: 0, behavior: 'smooth'});
})

navBtns[3].addEventListener('click', function() { // Contact
  navToggle.checked = !navToggle.checked;
  let body = document.body.getBoundingClientRect();
  let coordinate = document.getElementsByClassName('contact-content')[0].getBoundingClientRect();
  let y = coordinate.y - body.y;
  window.scrollTo({ top: y, left: 0, behavior: 'smooth'});
})

// Carousel Button Functions
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var num;
  var i;
  var slides = document.getElementsByClassName("item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  if (slideIndex == 1) {num = "one"}
  if (slideIndex == 2) {num = "two"}
  if (slideIndex == 3) {num = "three"}
  if (slideIndex == 4) {num = "four"}
  var dots = document.getElementsByClassName(num);

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
