const refs = {
    decrementBtnEl: document.querySelector('[data-action="decrement"]'),
    incrementBtnEl: document.querySelector('[data-action="increment"]'),
    valueFieldEl: document.querySelector('#value'),
}

refs.decrementBtnEl.addEventListener('click', onDecrementBtnHandler);
refs.incrementBtnEl.addEventListener('click', onincrementBtnHandler);

function onDecrementBtnHandler() {
    refs.valueFieldEl.textContent = Number(refs.valueFieldEl.textContent) - 1;   
};

function onincrementBtnHandler() {
    refs.valueFieldEl.textContent = Number(refs.valueFieldEl.textContent) + 1;   
};
