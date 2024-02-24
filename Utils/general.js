// Get button
const contactBtn = document.querySelector(".primaryButton")

// Variable to save contact page absolute URL
const contactPage = "/ironhack-midterm-project/Contact/contact.html"

// Function to navigate to any page

function navigateToPage(page) {
    window.location.assign(page);
}

// Add event into Contact Us button to navigate

contactBtn.addEventListener('click',() => {
    navigateToPage(contactPage)
})