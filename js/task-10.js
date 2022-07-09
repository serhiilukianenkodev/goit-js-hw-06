const refs = {
  targetDivEl: document.querySelector('#boxes'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
  inputAmoutEl: document.querySelector('#controls input'),
}

refs.createBtnEl.addEventListener('click', onCreateBtnClick);
refs.destroyBtnEl.addEventListener('click', onDestroyBtnClick);


function onCreateBtnClick() {
  const amount = refs.inputAmoutEl.value
  createBoxes(amount);
}

function onDestroyBtnClick() {
  // refs.inputAmoutEl.value = 0;
  refs.targetDivEl.innerHTML = '';

}

function createBoxes(amount) {
  const collection = [];
  for (let i = 0; i < amount; i += 1){
    const meas = 30 + i * 10;
    const color = getRandomHexColor();
    let boxMarkup = `<div style = "width: ${meas}px; height: ${meas}px; background-color: ${color};"></div>`
    
    collection.push(boxMarkup);
  }
  refs.targetDivEl.insertAdjacentHTML("beforeend", collection.join(''));
}
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
