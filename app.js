const menu = document.querySelector('.menu');
const list = document.querySelector('.nav__links');
const close = document.querySelector('.close');
close.onclick = function () {
  list.classList.remove('is-opened');
}
menu.onclick = function () {
  list.classList.toggle('is-opened');
}

const scroll = document.querySelector('.sample__btn'); 
const targetElement = document.querySelector('.history');

scroll.addEventListener('click', () => { 
  targetElement.scrollIntoView({ behavior: 'smooth' });
})