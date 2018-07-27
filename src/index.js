import './scss/main.scss';

const navBtn = document.querySelector('.nav__btn')

navBtn.addEventListener('click', function(){ this.classList.toggle('open') } )