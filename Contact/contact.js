// Get button

const sendBtn = document.querySelector(".primaryButton")

// Get form fields

const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const messageInput = document.querySelector("#message")

// Functions for form validation

function validateName(input) {
    // compulsory to have a value
    // not ironhack
    // no numbers?

    // should return true if all is OK
    // should return the alert message if something is not OK
}

function validateMail(input) {
    // has "@"
    // has ".com/es/something"
    // has structure "something@something.something"

    // should return true if all is OK
    // should return the alert message if something is not OK
}

function validatePhone(input) {
    // only numbers
    // 9 numbers
    // start with 6

    // should return true if all is OK
    // should return the alert message if something is not OK
}

function validateMessage(input) {
   // min characters
   // max characters 

    // should return true if all is OK
    // should return the alert message if something is not OK
}

function validateForm() {
    // think about adding some kind of logic to avoid checking all functions if first field is already wrong (if - else?)
    validateName(nameInput)
    validateMail(emailInput)
    validatePhone(phoneInput)
    validateMessage(messageInput)

    // should return true if all is OK
    // should return the alert message if something is not OK
}

function sendInformation() {
    if (validateForm() == true) {
        // send information
    }

    else {
        // show alert taking the message from validateForm() return
    }
}

// Add event into send button to send information

sendBtn.addEventListener('click',() => {
    sendInformation()
})