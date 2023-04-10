import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const { email, message } = form.elements;

populateFormOutput();

function onFormInput() {
    formData = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormOutput() {
    if (formData) {
        email.value = formData.email || '';
        message.value = formData.message || '';
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();

    if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Please fill in all the fields!');
    return;
    }

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}