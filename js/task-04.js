const refs = {
    decrementBtnEl: document.querySelector('[data-action="decrement"]'),
    incrementBtnEl: document.querySelector('[data-action="increment"]'),
    valueFieldEl: document.querySelector('#value'),
}

let counterValue = refs.valueFieldEl.textContent;

refs.decrementBtnEl.addEventListener('click', onDecrementBtnHandler);
refs.incrementBtnEl.addEventListener('click', onincrementBtnHandler);

function onDecrementBtnHandler() {
    counterValue = Number(counterValue) - 1;  
    setTextContent(counterValue, refs.valueFieldEl);
}

function onincrementBtnHandler() {
    counterValue = Number(counterValue) + 1;   
    setTextContent(counterValue, refs.valueFieldEl);
}

function setTextContent(value, ref) {
    ref.textContent = value;
}
