// --> HEADER: CONTACT US BUTTON

// Get button
const contactBtn = document.querySelector(".primaryButton")

// Function to navigate to any page
function navigateToPage(page) {
    window.location.assign(page);
}


// --> PROJECTS SECTION: home page AND project detail page

// Function to generate project detail URL
function generateProjectURL(id,url) {
    const origin = window.location.origin
    console.log(origin)
    return `${origin}${url}${id}`
}

// Function to get button from inside an article passed as parameter
function getBtnOfArticle(article) {
    return article.querySelector("button")
}

// Function to add event listener to corresponding projects "Learn more" button to navigate to project page detail
function addEventBtnProject(btn, url) {
    btn.addEventListener('click', () => {
        navigateToPage(url) //() navigateToPage function defined in general.js file
    })
}

// Exports
export { generateProjectURL, getBtnOfArticle, addEventBtnProject, contactBtn, navigateToPage };