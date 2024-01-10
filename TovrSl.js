function changeMainPhoto(element, photoUrl) {
  var mainPhoto = document.getElementById('mainPhoto');
  
  // Удаляем класс 'active' у всех маленьких фотографий
  var thumbnails = document.getElementsByClassName('thumbnail');
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].classList.remove('active');
  }
  
  // Добавляем класс 'active' к выбранной маленькой фотографии
  element.classList.add('active');
  
  // Изменяем большую фотографию
  mainPhoto.src = photoUrl;
}

  // Відображення першого елементу при завантаженні сторінки
  window.addEventListener('DOMContentLoaded', function() {
    var firstElement = document.querySelector('.element');
    showText('text1', firstElement);
  });

  function showText(targetId, element) {
    var textContainer = document.getElementById(targetId);
    var textElements = document.querySelectorAll('.text');
  
    for (var i = 0; i < textElements.length; i++) {
      if (textElements[i].id === targetId) {
        textElements[i].style.display = 'block';
      } else {
        textElements[i].style.display = 'none';
      }
    }

    var elements = document.querySelectorAll('.element');
    for (var j = 0; j < elements.length; j++) {
      elements[j].classList.remove('active2');
    }
    element.classList.add('active2');
  }

