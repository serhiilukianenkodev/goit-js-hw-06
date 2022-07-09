const changeColorBtnEl = document.querySelector('.change-color');
const textFieldEl = document.querySelector('.color');
const body = document.querySelector('body');

changeColorBtnEl.addEventListener('click', onChangeColorBtnClickHandler)

function onChangeColorBtnClickHandler() {
  const newColor = getRandomHexColor();
  textFieldEl.textContent = newColor;
  body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
