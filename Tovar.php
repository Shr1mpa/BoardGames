<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

    <link rel="stylesheet" href="slidergpt.css" />
    <link rel="stylesheet" href="FGames.css" />
    <link rel="stylesheet" href="itc-slider.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="about.css" />
    <script src="https://kit.fontawesome.com/5e376815bd.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="Cards.css" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="styles/footer.css" />
    <link rel="stylesheet" href="Tovar.css" />
    <title>MagiCodice</title>
</head>

<body>
    <!-- Heder with Logo -->
    <div class="header1">
        <a href="index.html">
            <div class="logo">
                <img class="logo-img" src="images/LogoTopPng.png" alt="" />
            </div>
        </a>

        <div class="phone">
            <div class="phone-holder">
                <a class="num Phone" href="*"><i class="fa-solid fa-phone fa-xl"></i>+380556548790</a>

                <div class="profile-holder">
                    <a href="login.php">
                        <i class="fa-solid fa-user fa-xl"></i>
                    </a>
                </div>
                <div class="cart-holder">
                    <a href="*">
                        <i class="fa-solid fa-cart-shopping fa-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Header with Menu -->
    <div class="header2-Family">
        <div class="bg-color-wh">
            <div class="container">
                <div class="header-line">
                    <div class="nav">
                        <div class="dropdown">
                            <a class="nav-item2 Menu" href="*"><i class="fa-solid fa-bars nav-icon"></i>Каталог</a>
                            <div class="dropdown-content">
                                <a href="FamilyGames.html">Для сім'ї</a>
                                <a href="#">Для двох</a>
                                <a href="#">Для вечірок</a>
                                <a href="#">Аксесуари</a>
                            </div>
                        </div>

                        <a class="nav-item" href="*">Wharhammer</a>
                        <a class="nav-item" href="*">Magic:the Cathering</a>
                        <a class="nav-item" href="*">D&D</a>
                        <a class="nav-item" href="*">Про нас</a>
                        <a class="nav-item" href="*">Контакти</a>

                        <a class="nav-item1" href="*"><i class="fa-brands fa-instagram"></i></a>
                        <a class="nav-item1" href="*"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
<section class="Tovar-slide">
  <div class="Inf-sec"></div>
  <div class="gallery">
    <div class="main-photo">
      <img src="" alt="Big Photo" id="mainPhoto" />
    </div>
    <div class="thumbnail-photos">
      <!-- Вставте сюди JavaScript-код, який генерує мініатюрні фотографії з файлу бази даних -->
    </div>
  </div>
  <div class="Inf-Tovar">
    <div class="line1">
      <!-- Вставте сюди JavaScript-код, який генерує інформацію про товар з файлу бази даних -->
    </div>
  </div>
</section>

<!-- Вставте всі ваші підключення до JavaScript-файлів тут -->
<script>
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
</script>
    <script src="JS/myScript.js"></script>
    <script src="slidgpt.js"></script>
    <script src="itc-slider.js"></script>
    <script src="Categories.js"></script>
    <script src="TovrSl.js"></script>
    <script src="Generating.js"></script>
</body>

</html>