// Definition success message of Form
const successMessage = "Information submitted successfully. We will contact you by mail."


// Get button

const sendBtn = document.querySelector("#submit-btn")

// Functions to Get form inputs and input values

function getInputElems() {
    // takes html input elements
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone");
    const messageInput = document.querySelector("#message");

    return [nameInput, emailInput, phoneInput, messageInput]
    // returns a list with the inputs elements
}

function getInputValues() {
    // takes values of html input form fields
    const nameInput = document.querySelector("#name").value;
    const emailInput = document.querySelector("#email").value;
    const phoneInput = document.querySelector("#phone").value;
    const messageInput = document.querySelector("#message").value;

    return [nameInput, emailInput, phoneInput, messageInput]
    // returns a list with the inputs values
}


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
    if (!input) { // No name introduced
        return "The name is compulsory"
    }
    else if (input.toLowerCase() === "ironhack") { // name is ironhack
        return "You cannot be Ironhack, because I am Ironhack"
    }
    else if (hasNumbers(input) === true) { // name contains numbers
        return "A name cannot contain numbers"
    }
    else {
        return true
    }
    // should return true if all is OK
    // should return the alert message if something is not OK
}

// Function to validate the email
function validateMail(input) {
    if (!input) { // No email introduced
        return "The email is compulsory"
    }
    else if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input) === false) {
        return "The mail needs to match the format 'example@example.xxx'"
    }
    else {
        return true
    }
    // should return true if all is OK
    // should return the alert message if something is not OK
}

// Function to validate the phone
function validatePhone(input) {
    if (/^\d{9}$/.test(input) === false) {
        return "The phone must contain 9 numerical digits"
    }
    else if (/^[67]/.test(input) === false) {
        return "The phone must start by 6 or 7"
    }
    else {
        return true
    }
    // should return true if all is OK
    // should return the alert message if something is not OK
}

// Function to validate the message
function validateMessage(input) {
    if (/^.{10,1000}$/.test(input) === false) {
        return "The message must be between 10 and 1000 characters"
    }
    else {
        return true
    }
    // should return true if all is OK
    // should return the alert message if something is not OK
}

// Function to validate the whole form, calls the previus defined functions for individual input validation
function validateForm(nameInput, emailInput, phoneInput, messageInput) {

    const [nameInputElem, emailInputElem, phoneInputElem, messageInputElem] = getInputElems();

    if (validateName(nameInput) != true && validateName(nameInput) != undefined) {
        return [validateName(nameInput),nameInputElem]
    }
    else if (validateMail(emailInput) != true && validateMail(emailInput) != undefined) {
        return [validateMail(emailInput),emailInputElem]
    }
    else if (validatePhone(phoneInput) != true && validatePhone(phoneInput) != undefined) {
        return [validatePhone(phoneInput),phoneInputElem]
    }
    else if (validateMessage(messageInput) != true && validateMessage(messageInput) != undefined) {
        return [validateMessage(messageInput),messageInputElem]
    }
    else {
        return [successMessage,null]
    }
    // returns a list
    // the fist position corresponds to the message:
        // should return success message if all is OK 
        // should return the alert message if something is not OK. Checking inputs in order, will return error message of the first wrong input
    // the second position corresponds to the element that generate the error in form validation (if all is ok, it is null)
}

// Function to change background color of html element to red
function changeBackgroundToRed(elem) {
    elem.classList.add("redBackground")
}

// Function to show alerts
function showAlert(message) {
    // show alert receiving the alert message by parameter
    alert(message[0]); // displays alert with the success / error message
}

// Function to change all inputs to original background color
function backToInitialState() {
    const inputElems = getInputElems();
    inputElems.forEach((elem) => {
        if(elem.classList.contains("redBackground")) {
            elem.classList.remove("redBackground")
        }
    })
}

// Function to remove all input values. To be used on form success
function removeInputValues() {
    const inputElems = getInputElems()
    inputElems.forEach((elem) => {    
        elem.value = "";
    })
}

// Function to be called onclick generation and concatenate operations for input/output of the form by calling other functions
function contactFormInputOutput() {
    // call a function to change all inputs to original background color
    backToInitialState()

    // call getInputValues function to retrieve the values of the inputs
    const [nameInput, emailInput, phoneInput, messageInput] = getInputValues();

    const isValid = validateForm(nameInput, emailInput, phoneInput, messageInput)

    // on form success, call a function to remove the input elements values
    if (isValid[0] === successMessage) {
        removeInputValues()
    } else { // else (some errored input): the errored input changes background color to red by applying a class
        changeBackgroundToRed(isValid[1])
    }

    // call the showalert function with the outcome of validationForm function
    showAlert(isValid)

}

// Add event into send button to send information

sendBtn.addEventListener('click',() => {
    contactFormInputOutput()
})