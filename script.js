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
      'Check your email address and do not forget to send me a message.';
    return;
  }
  if (!email.value || !re.test(email.value)) {
    info.textContent = 'Check you email address.';
    return;
  }
  if (!message.value) {
    info.textContent = 'Write a message to send.';
    return;
  }

  form.submit();
});

const appendElements = function () {
  const h1 = document.querySelector('.start-center h1');
  const h2 = document.querySelector('.start-center h2');
  const img = document.querySelector('.start-tile img');

  setTimeout(() => h1.classList.remove('hidden'), 500);
  setTimeout(() => img.classList.remove('hidden'), 3500);
  setTimeout(() => h2.classList.remove('hidden'), 2000);
};
appendElements();

const toggleSideMenu = function () {
  const sideMenu = document.querySelector('.side-menu');
  const burgerTop = document.querySelector('.burger-top');
  const burgerMid = document.querySelector('.burger-mid');
  const burgerBottom = document.querySelector('.burger-bottom');
  sideMenu.classList.toggle('no-translate');
  burgerTop.classList.toggle('burger-top-close');
  burgerMid.classList.toggle('burger-mid-close');
  burgerBottom.classList.toggle('burger-bottom-close');
  burgerBtn.classList.toggle('burger-btn-close');
};

const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', function () {
  toggleSideMenu();
});

const sideMenu = document.querySelector('.side-menu');
sideMenu.addEventListener('click', function (e) {
  if (e.target.classList.contains('side-menu')) return;
  toggleSideMenu();
});

const nav = document.querySelector('nav');
const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      nav.classList.add('position-fixed');
      nav.style.backgroundColor = '#000';
    } else {
      nav.classList.remove('position-fixed');
      nav.style.backgroundColor = 'transparent';
    }
  },
  {
    threshold: 0.2,
    rootMargin: `${nav.getBoundingClientRect().height}px`,
  }
);

observer.observe(document.querySelector('.section-1'));

const aboutMeTabsContainer = document.querySelector('.about-me-tabs');
const tabDescription = document.querySelector('.tab-desc');
const skillsTab = document.querySelector('#skills-tab');
const experienceTab = document.querySelector('#experience-tab');
let html;
aboutMeTabsContainer.addEventListener('click', function (e) {
  switch (e.target.id) {
    case 'skills-tab':
      {
        html = `
        <ul class="ul-tab">
          <li class="html-skill">HTML</li>
          <li class="css-skill">CSS</li>
          <li class="js-skill">JavaScript</li>
          <li class="wp-skill">Wordpress</li>
        </ul>`;
        skillsTab.classList.add('tab-underline');
        experienceTab.classList.remove('tab-underline');
      }
      break;
    case 'experience-tab':
      {
        html = `
          <div class="experience-item">
            <p class="experience-name">Website administrator</p>
            <p class="experience-date">March 2023 - now</p>
          </div>`;
        skillsTab.classList.remove('tab-underline');
        experienceTab.classList.add('tab-underline');
      }
      break;
  }
  tabDescription.innerHTML = html;
});

const projectsObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting)
      document.querySelector('.my-projects-underline').style.width = '50%';
  },
  {
    threshold: 0.3,
  }
);

projectsObserver.observe(document.querySelector('.section-3'));
