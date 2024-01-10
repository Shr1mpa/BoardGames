// Отримання поточної дати
var currentDate = new Date();

// Побудова календаря
function buildCalendar() {
  var calendar = document.getElementById("calendar");

  // Додавання назви місяця
  var month = document.getElementById("month");
  month.textContent = currentDate.toLocaleString("uk-UA", { month: "long", year: "numeric" });

  // Додавання заголовків днів тижня
  var weekdays = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  var weekdaysDiv = document.getElementById("weekdays");
  weekdaysDiv.innerHTML = "";

  for (var i = 0; i < weekdays.length; i++) {
    var weekday = document.createElement("div");
    weekday.textContent = weekdays[i];
    weekdaysDiv.appendChild(weekday);
  }

  // Отримання першого дня місяця
  var firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  // Отримання останнього дня місяця
  var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  var datesDiv = document.getElementById("dates");
  datesDiv.innerHTML = "";

  // Додавання дат
  for (var i = 1; i <= lastDay.getDate(); i++) {
    var date = document.createElement("div");
    date.textContent = i;

    if (currentDate.getMonth() === new Date().getMonth() && currentDate.getDate() === i) {
      date.classList.add("current-day");
    }

    date.addEventListener("click", function () {
      var selectedDay = this.textContent;
      console.log("Selected Day:", selectedDay);
      // Додайте додатковий код для обробки вибраної дати
    });

    datesDiv.appendChild(date);
  }
}

// Функція для переключення до попереднього місяця
function goToPreviousMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  buildCalendar();
}

// Функція для переключення до наступного місяця
function goToNextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  buildCalendar();
}

// Виклик функції побудови календаря
buildCalendar();

// Обробники подій для кнопок переключення місяців
var prevBtn = document.getElementById("prevBtn");
prevBtn.addEventListener("click", goToPreviousMonth);

var nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", goToNextMonth);
