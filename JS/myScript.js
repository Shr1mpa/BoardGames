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
console.log(jQuery().jquery);

$(document).on('click', '#burger', function () {
 $('.nav-menu').toggleClass('active');
});

$('#subscription_form').on('submit', function (e) {
 e.preventDefault();
 var $form = $(this);
 $.ajax({
 type: 'POST',
 url: './subscription_ajax.php',
 data: $form.serialize()
 }).done(function () {
 $form[0].reset();
 alert('Дякуємо за підписку!');
 }).fail(function () {
 alert('Сталася помилка');
 });
});
  const cards = document.querySelectorAll('.Card');
  const prevButton = document.querySelector('.Button-prev');
  const nextButton = document.querySelector('.Button-next');
  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateCardPosition();
      }
  });

  nextButton.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
          currentIndex++;
          updateCardPosition();
      }
  });

  function updateCardPosition() {
      const cardWidth = cards[0].offsetWidth;
      const translateX = -currentIndex * cardWidth;
      cards.forEach(card => {
          card.style.transform = `translateX(${translateX}px)`;
      });
  }