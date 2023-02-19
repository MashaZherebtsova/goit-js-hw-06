const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit',onFormSubmit);

function onFormSubmit(event) {
event.preventDefault()

const {
    elements: { email, password },
} = event.currentTarget

if (email.value === '' || password.value === '') {
    return alert('Пожалуйста заполните все поля!')
}
const userDetails = { email: email.value, Password: password.value }

console.log(userDetails)
event.currentTarget.reset()
}
