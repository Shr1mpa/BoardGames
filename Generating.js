
  // Зчитуємо вміст файлу бази даних
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const productId = getUrlParameter('id');
      const productData = data[productId];

      if (productData) {
        // Генеруємо мініатюрні фотографії
        const thumbnailPhotos = productData.thumbnailPhotos;
        const thumbnailPhotosContainer = document.querySelector('.thumbnail-photos');

        thumbnailPhotos.forEach(photo => {
          const img = document.createElement('img');
          img.src = photo;
          img.alt = 'Small Photo';
          img.classList.add('thumbnail');
          img.addEventListener('click', function () {
            changeMainPhoto(this, photo);
          });
          thumbnailPhotosContainer.appendChild(img);
        });

        // Встановлюємо основне фото
        const mainPhoto = productData.mainPhoto;
        const mainPhotoElement = document.getElementById('mainPhoto');
        mainPhotoElement.src = mainPhoto;

        // Генеруємо інформацію про товар
        const usersElement = document.querySelector('.users');
        usersElement.innerHTML = `<i class="fa-solid fa-users fa-xl"></i><p>${productData.users}</p>`;

        const timeElement = document.querySelector('.time');
        timeElement.innerHTML = `<i class="fa-regular fa-clock fa-xl"></i><p>${productData.time}</p><h3>${productData.age}</h3>`;

        const priceElement = document.querySelector('h2');
        priceElement.textContent = `${productData.price} ₴`;

        const buyButton = document.querySelector('.buy');
        buyButton.addEventListener('click', function () {
          // Додайте код для додавання товару в кошик
        });

        const buy1Button = document.querySelector('.buy1');
        buy1Button.addEventListener('click', function () {
          // Додайте код для купівлі товару в 1 клік
        });
      }
    })
    .catch(error => {
      console.error('Помилка при отриманні даних з бази даних:', error);
    });

  // Функція для отримання параметрів URL
  function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

