// const nameInput = document.getElementById("nameInput");


// nameInput.addEventListener("click", function() {
 
//   nameInput.placeholder = "";
// });


// nameInput.addEventListener("blur", function() {
  
//   if (!nameInput.value) {
//     nameInput.placeholder = "Ім'я";
//   }
// });
// const phoneInput = document.getElementById("phoneInput");


// phoneInput.addEventListener("click", function() {
 
//   phoneInput.placeholder = "";
// });


// phoneInput.addEventListener("blur", function() {
  
//   if (!nameInput.value) {
//     phoneInput.placeholder = "Номер телефону";
//   }
// });
// const commentInput = document.getElementById("commentInput");


// commentInput.addEventListener("click", function() {
 
//   commentInput.placeholder = "";
// });


// commentInput.addEventListener("blur", function() {
  
//   if (!nameInput.value) {
//     commentInput.placeholder = "Коментар";
//   }
// });
// Submit subscription form using Ajax
// Submit subscription form using Ajax



//   const cards = document.querySelectorAll('.Card');
//   const prevButton = document.querySelector('.Button-prev');
//   const nextButton = document.querySelector('.Button-next');
//   let currentIndex = 0;

//   prevButton.addEventListener('click', () => {
//       if (currentIndex > 0) {
//           currentIndex--;
//           updateCardPosition();
//       }
//   });

//   nextButton.addEventListener('click', () => {
//       if (currentIndex < cards.length - 1) {
//           currentIndex++;
//           updateCardPosition();
//       }
//   });

  
    const sliderInner = document.querySelector('.my-slider-inner');
        const images = sliderInner.querySelectorAll('img');
        const totalImages = images.length;
        let currentIndex = 0;
        const slideInterval = 3000; // Интервал между перелистываниями (в миллисекундах)

        setInterval(nextSlide, slideInterval);

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalImages;
            sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
        function redirectToPage(url) {
  window.location.href = url;
}
function smoothScroll(target) {
  const element = document.querySelector(target);
  element.style.opacity = 1; // Змінюємо прозорість на 1, щоб елемент став видимим
  
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth' // Додаємо плавну анімацію прокрутки
  });
}
window.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const target = urlParams.get('target');
  
  if (target) {
    const element = document.querySelector(target);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }
});