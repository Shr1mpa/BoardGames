// var categoryButtons = document.getElementById('category-list').getElementsByTagName('li');
// var productCards = document.getElementById('product-container').getElementsByClassName('card-New');

// // Додавання обробника подій для кожної кнопки категорії
// for (var i = 0; i < categoryButtons.length; i++) {
//   categoryButtons[i].addEventListener('click', showProducts);
// }

// // Функція для показу відповідних карток товарів
// function showProducts() {
//   var selectedCategory = this.getAttribute('data-category');

//   // Приховування всіх карток товарів
//   for (var i = 0; i < productCards.length; i++) {
//     productCards[i].style.display = 'none';
//   }

//   // Відображення карток товарів, що відповідають вибраній категорії
//   var filteredCards = document.querySelectorAll('[data-category="' + selectedCategory + '"]');
//   for (var i = 0; i < filteredCards.length; i++) {
//     filteredCards[i].style.display = 'block';
//   }
// }
 const listItems = document.querySelectorAll('.list-item');

listItems.forEach((item) => {
  const mainItem = item.querySelector('.main-item');
  mainItem.addEventListener('click', () => {
    const sublist = item.querySelector('.sublist');
    sublist.classList.toggle('visible');
  });
});

function updatePriceRange() {
    var slider = document.getElementById("priceSlider");
    var fromInput = document.getElementById("fromInput");
    var toInput = document.getElementById("toInput");

    slider.value = fromInput.value;
  }

  function updateTextInput(val) {
    var fromInput = document.getElementById("fromInput");
    var toInput = document.getElementById("toInput");

    fromInput.value = val;
  }

  function updateSliderValue(val) {
    var slider = document.getElementById("priceSlider");
    var fromInput = document.getElementById("fromInput");

    if (val === "") {
      slider.value = 0;
    } else {
      slider.value = val;
    }
  }

  window.onload = function () {
    var toInput = document.getElementById("toInput");
    toInput.value = "5290";
};
   const listItems1 = document.querySelectorAll('.list-item');

listItems1.forEach((item) => {
  const mainItem1 = item.querySelector('.main-item');
  mainItem1.addEventListener('click', () => {
    const sublist1 = item.querySelector('.sublist1');
    sublist1.classList.toggle('visible');
  });
});
