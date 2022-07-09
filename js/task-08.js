const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmitHandler);

function onFormSubmitHandler(event) {
    event.preventDefault();

    const { elements: {email, password} } = event.currentTarget;

    if (!email.value || !password.value) {
        alert('Все поля должны быть заполнены');
        return;
    }

    const formData = {
        email: email.value,
        password: password.value,
    }
    console.log(formData);
    event.currentTarget.reset();
}
