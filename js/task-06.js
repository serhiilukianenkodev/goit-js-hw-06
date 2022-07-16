const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlurHandler);

function onInputBlurHandler(event) {
    const valeuLength = event.currentTarget.value.length;
    const valueData = event.currentTarget.dataset.length;

    if ((valeuLength == valueData)) {
            inputEl.classList.add('valid');
            inputEl.classList.remove('invalid');
        } else {
            inputEl.classList.add('invalid');
            inputEl.classList.remove('valid');
        }
}
