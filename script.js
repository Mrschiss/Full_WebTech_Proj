function hideHelpBox() {
    var helpBox = document.getElementById('help-box');
    helpBox.style.visibility = "hidden";

    setTimeout(showHelpBox, 6000); // Show the help box after 60 seconds
}

function showHelpBox() {
    var helpBox = document.getElementById('help-box');
    helpBox.style.visibility = "visible";

    setTimeout(hideHelpBox, 6000); // Hide the help box after another 60 seconds
}


let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 