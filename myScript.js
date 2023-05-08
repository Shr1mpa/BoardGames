const nameInput = document.getElementById("nameInput");


nameInput.addEventListener("click", function() {
 
  nameInput.placeholder = "";
});


nameInput.addEventListener("blur", function() {
  
  if (!nameInput.value) {
    nameInput.placeholder = "Ім'я";
  }
});
const phoneInput = document.getElementById("phoneInput");


phoneInput.addEventListener("click", function() {
 
  phoneInput.placeholder = "";
});


phoneInput.addEventListener("blur", function() {
  
  if (!nameInput.value) {
    phoneInput.placeholder = "Номер телефону";
  }
});
const commentInput = document.getElementById("commentInput");


commentInput.addEventListener("click", function() {
 
  commentInput.placeholder = "";
});


commentInput.addEventListener("blur", function() {
  
  if (!nameInput.value) {
    commentInput.placeholder = "Коментар";
  }
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
