const list = document.querySelector('.header__menu'); 
const btn = document.querySelector('.header__toggle-btn');
btn.addEventListener('click', function(){
  list.classList.toggle('active');
  btn.classList.toggle('active');
})