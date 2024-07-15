let currentSlideIndex = 0;
const navigationURL = "https://www.fylehq.com/";

function showSlide(index) {
  const $slides = $(".slides");
  const totalSlides = $(".slide-wrapper").length;
  const $dots = $(".dot");

  if (index < 0) {
    currentSlideIndex = Math.floor(totalSlides / 3) - 1;
  } else if (index >= Math.floor(totalSlides / 3)) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex = index;
  }

  const offset = -currentSlideIndex * 100;
  $slides.css("transform", `translateX(${offset}%)`);
  $dots.each(function(i) {
    $(this).toggleClass("active", i === currentSlideIndex);
  });
}

function currentSlide(index) {
  showSlide(index);
}

function nextSlide() {
  const totalSlides = $(".slide-wrapper").length;
  currentSlideIndex = (currentSlideIndex + 1) % Math.ceil(totalSlides / 3);
  showSlide(currentSlideIndex);
}

function startSlideShow() {
  setInterval(nextSlide, 3000);
}

$(document).ready(function() {
  showSlide(currentSlideIndex);
  startSlideShow();

  $(".slide-wrapper .overlay-img").click(function() {
    window.location.href = navigationURL;
  });
});
