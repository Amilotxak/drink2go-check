/* в этот файл добавляет скрипты*/
let navMain = document.querySelector('.header__button-wrapper');
let navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__button-nojs');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('header__button-closed');
  navMain.classList.toggle('header__button-opened');
});
