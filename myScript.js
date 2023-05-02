// получаем все карточки и кнопки
const carousel = document.querySelector('.Card-line');
const prevButton = document.querySelector('.Nazad');
const nextButton = document.querySelector('.Vpered');
const cardWidth = carousel.querySelector('.Card1').offsetWidth;

let currentPosition = 0;

prevButton.addEventListener('click', () => {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    carousel.style.transform = `translateX(${currentPosition}px)`;
  }
});

nextButton.addEventListener('click', () => {
  const maxPosition = -cardWidth * (carousel.querySelectorAll('.Card').length - 4);

  if (currentPosition > maxPosition) {
    currentPosition -= cardWidth;
    carousel.style.transform = `translateX(${currentPosition}px)`;
  }
});




