    function slideNext(sliderId) {
      const slider = document.querySelector(`.${sliderId}`);
      const cards = slider.querySelectorAll('.card');
      const numCards = cards.length;
      const cardWidth = cards[0].offsetWidth;

      let currentIndex = 0;

      if (slider.style.transform) {
        const transformValue = slider.style.transform;
        const translateXValue = transformValue.match(/translateX\(-(\d+)/);

        if (translateXValue) {
          currentIndex = parseInt(translateXValue[1]) / (cardWidth + 10);
        }
      }

      if (currentIndex === numCards - 4) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }

      slider.style.transform = `translateX(-${currentIndex * (cardWidth + 10)}px)`;

      cards.forEach((card, index) => {
        if (index < currentIndex || index >= currentIndex + 4) {
          card.classList.add('hidden');
        } else {
          card.classList.remove('hidden');
        }
      });

      
    }

    function slidePrev(sliderId) {
      const slider = document.querySelector(`.${sliderId}`);
      const cards = slider.querySelectorAll('.card');
      const numCards = cards.length;
      const cardWidth = cards[0].offsetWidth;

      let currentIndex = 0;

      if (slider.style.transform) {
        const transformValue = slider.style.transform;
        const translateXValue = transformValue.match(/translateX\(-(\d+)/);

        if (translateXValue) {
          currentIndex = parseInt(translateXValue[1]) / (cardWidth + 10);
        }
      }

      if (currentIndex === 0) {
        currentIndex = numCards - 4;
      } else {
        currentIndex--;
      }

      slider.style.transform = `translateX(-${currentIndex * (cardWidth + 10)}px)`;

      cards.forEach((card, index) => {
        if (index < currentIndex || index >= currentIndex + 4) {
          card.classList.add('hidden');
        } else {
          card.classList.remove('hidden');
        }
      });

      
    }

 