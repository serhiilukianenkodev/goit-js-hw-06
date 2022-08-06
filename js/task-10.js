const refs = {
  targetDivEl: document.querySelector('#boxes'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
  inputAmoutEl: document.querySelector('#controls input'),
}

refs.createBtnEl.addEventListener('click', onCreateBtnClick);
refs.destroyBtnEl.addEventListener('click', destroyBoxes);

let currentMeas = 30;


function onCreateBtnClick() {
  const amount = refs.inputAmoutEl.value
  createBoxes(amount, currentMeas);
}

function destroyBoxes() {
  refs.targetDivEl.innerHTML = '';
  currentMeas = 30;
}

function createBoxes(amount, startMeas) {
  const collection = [];
  for (let i = 0; i < amount; i += 1){
    const size = i * 10 + startMeas;
    currentMeas = size + 10
    const color = getRandomHexColor();
    let boxMarkup = `<div style = "width: ${size}px; height: ${size}px; background-color: ${color};"></div>`
    
    collection.push(boxMarkup);
  }
  refs.targetDivEl.insertAdjacentHTML("beforeend", collection.join(''));
}
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
