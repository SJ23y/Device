
const slidesCount = 3;
const promoSlides = document.querySelectorAll('.slider-item');
const promoBullets = document.querySelectorAll('.bullet');
const promoNextButton = document.querySelector('.slider-next-button');
const promoPreviousButton = document.querySelector('.slider-previous-button');

let curentSlideNumber = 0;

promoBullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    promoSlides.item(curentSlideNumber).classList.remove('active');
    promoSlides.item(index).classList.add('active');

    promoBullets.item(curentSlideNumber).classList.remove('active');
    bullet.classList.add('active');

    curentSlideNumber = index;
  })
});

if (promoNextButton) {
  promoNextButton.addEventListener('click', () => {
    promoSlides.item(curentSlideNumber).classList.remove('active');
    promoBullets.item(curentSlideNumber).classList.remove('active');

    curentSlideNumber = (curentSlideNumber === slidesCount - 1) ? 0 : curentSlideNumber + 1;

    promoSlides.item(curentSlideNumber).classList.add('active');
   promoBullets.item(curentSlideNumber).classList.add('active');
  })
}


if (promoPreviousButton) {
  promoPreviousButton.addEventListener('click', () => {
    promoSlides.item(curentSlideNumber).classList.remove('active');
    promoBullets.item(curentSlideNumber).classList.remove('active');

    curentSlideNumber = (curentSlideNumber === 0) ? slidesCount - 1 : curentSlideNumber - 1;

    promoSlides.item(curentSlideNumber).classList.add('active');
   promoBullets.item(curentSlideNumber).classList.add('active');
  })
}
