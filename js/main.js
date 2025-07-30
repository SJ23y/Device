const modal = document.querySelector('.modal');
const modalCloseButton = modal.querySelector('.modal-close-button');
const openModalButtons = document.querySelectorAll('.delivery-button')
const cartButton = document.querySelector('.cart-button');
const cartPopup = document.querySelector('.cart-popup');
const dropdownButton = document.querySelector('.dropdown-button');


if (modal) {
  openModalButtons.forEach(button => {
    if (button) {
       button.addEventListener('click', () =>  modal.classList.toggle('active'));
    }

  });
  if (modalCloseButton) {

    modalCloseButton.addEventListener('click', () => {
      modal.classList.toggle('active');
    });
  }
}

if (cartPopup && cartButton) {
  cartButton.addEventListener('click', () => cartPopup.classList.toggle('active'));
}

if (dropdownButton) {
  dropdownButton.addEventListener('click', () => dropdownButton.classList.toggle('active'))
}
