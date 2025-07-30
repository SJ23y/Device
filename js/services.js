const servicesControls = document.querySelectorAll('.services-control-button');
const servicesCards = document.querySelectorAll('.service-item')

let currentServiceNumber = 0;

servicesControls.forEach((serviceButton, index) => {
    serviceButton.addEventListener('click', () => {
      servicesCards.item(currentServiceNumber).classList.remove('active');
      servicesCards.item(index).classList.add('active');

      servicesControls.item(currentServiceNumber).parentNode.classList.remove('active');
      serviceButton.parentNode.classList.add('active');

      currentServiceNumber = index;
    })
});
