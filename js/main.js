const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const contant=document.querySelector('#contant');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// Validation of the form

var nameError = document.getElementById("name-error")
var emailError = document.getElementById("email-error")
var messageError = document.getElementById("message-error")
var submitError = document.getElementById("submit-error")
function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'name is required';
        return false;
    }
    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        nameError.innerHTML = 'write full name ';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        email.innerHTML = 'Email Is Required'
        return false;
    }
    if (!email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email in Valid ';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + 'more characters required ';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'please Fix error to submit';
        setTimeout(function () { submitError.style.display = 'none' }, 3000)
        return false;
    }
}