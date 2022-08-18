'use strict';

const appendElements = function () {
  const h1 = document.querySelector('.start-center h1');
  const h2 = document.querySelector('.start-center h2');
  const img = document.querySelector('.start-tile img');

  setTimeout(() => h1.classList.remove('hidden'), 500);
  setTimeout(() => img.classList.remove('hidden'), 1500);
  setTimeout(() => h2.classList.remove('hidden'), 2500);
};

appendElements();
