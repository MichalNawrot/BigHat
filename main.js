let loginPopup = document.querySelector('.login-popup');
let card = document.querySelector('.card');
let close = document.querySelector('#close');

loginPopup.addEventListener('click', () => {
  card.classList.add('active-popup')
})

close.addEventListener('click', () => {
  card.classList.remove('active-popup')
})