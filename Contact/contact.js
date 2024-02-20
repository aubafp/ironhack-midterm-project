// Get button

const sendBtn = document.querySelector("#submit-btn")

// Get form fields

const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const phoneInput = document.querySelector("#phone")
const messageInput = document.querySelector("#message")

// Functions for form validation

// Function to check if an array contains any number
function hasNumbers(input) {
    return /\d/.test(input) 
    // \d is a metacharacter that matches any digit from 0 to 9 (RegEx)
    // The test() method of RegExp instances executes a search with this regular expression for a match between a regular expression and a specified string. Returns true if there is a match; false otherwise.
    // should return true if the array contains any number
    // should return false if the array contains no numbers
}

// Function to validate the name
function validateName(input) {
    if (!input) {
        return "The name is compulsory"
    }
    else if (input.toLowerCase() === "ironhack") {
        return "You cannot be Ironhack, because I am Ironhack"
    }
    else if (hasNumbers(input) === true) {
        return "A name cannot contain numbers"
    }
    else {
        return true
    }
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

function showAlert(message) {
    // show alert receiving the alert message by parameter
}

function sendInformation() {
    if (validateForm() == true) {
        // send information
    }

    else {
        showAlert(validateForm())
    }
}

// Add event into send button to send information

sendBtn.addEventListener('click',() => {
    sendInformation()
})