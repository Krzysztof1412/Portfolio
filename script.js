'use strict';

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const info = document.querySelector('#form-info');

  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.value && !message.value) {
    info.textContent =
      'Uzupełnij poprawnie adres e-mail oraz nie zapomnij napisać wiadomości.';
    return;
  }
  if (!email.value || !re.test(email.value)) {
    info.textContent = 'Uzupełnij poprawnie adres e-mail.';
    return;
  }
  if (!message.value) {
    info.textContent = 'Napisz wiadomość aby kontynuować.';
    return;
  }

  form.submit();
});

const appendElements = function () {
  const h1 = document.querySelector('.start-center h1');
  const h2 = document.querySelector('.start-center h2');
  const img = document.querySelector('.start-tile img');

  setTimeout(() => h1.classList.remove('hidden'), 500);
  setTimeout(() => img.classList.remove('hidden'), 1500);
  setTimeout(() => h2.classList.remove('hidden'), 2500);
};
appendElements();

const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', function() {
  const sideMenu = document.querySelector('.side-menu');
  const burgerTop = document.querySelector('.burger-top');
  const burgerMid = document.querySelector('.burger-mid');
  const burgerBottom = document.querySelector('.burger-bottom');
  sideMenu.classList.toggle('no-translate');
  burgerTop.classList.toggle('burger-top-close');
  burgerMid.classList.toggle('burger-mid-close');
  burgerBottom.classList.toggle('burger-bottom-close');
  burgerBtn.classList.toggle('burger-btn-close');
});

// const addObervers = function () {
//   const moveToSection = function (entries) {
//     const [entry] = entries;
//     const coords = entry.target.getBoundingClientRect().top;

//     if (entry.isIntersecting) {
//       const windowHeight = window.innerHeight;
//       entry.target.scrollIntoView({ behavior: 'smooth' });
//       // window.scrollBy(0, windowHeight - window.scrollY);
//       console.log(entry);
//     }
//   };

//   const aboutMe = document.querySelector('.about-me-section');

//   const sectionObserver = new IntersectionObserver(moveToSection, {
//     rootMargin: '-100px',
//   });
//   sectionObserver.observe(aboutMe);
// };
// addObervers();
