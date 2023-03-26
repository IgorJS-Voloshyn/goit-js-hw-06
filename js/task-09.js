const btn = document.querySelector('.change-color');
const text = document.querySelector('.color');

btn.addEventListener('click', changeColorButtonHeandler);

function changeColorButtonHeandler(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  text.textContent = document.body.style.backgroundColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
