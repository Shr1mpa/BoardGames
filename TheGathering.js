var photos = document.querySelectorAll('.photo');

photos.forEach(function(photo) {
  photo.addEventListener('click', function() {
    photo.classList.toggle('expanded');

    photos.forEach(function(otherPhoto) {
      if (otherPhoto !== photo) {
        otherPhoto.classList.toggle('shrunk');
      }
    });
  });
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);

