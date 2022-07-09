const controlEl = document.querySelector('#font-size-control');
const textFieldEl = document.querySelector('#text');

controlEl.addEventListener('input', onControlChangeHandler);

function onControlChangeHandler(event) {
    const controlValue = event.currentTarget.value;
    textFieldEl.style.fontSize = `${controlValue}px`;
}
