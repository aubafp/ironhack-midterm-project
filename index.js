// HERO SECTION

// Get in touch button
const getInTouchBtn = document.querySelector("#getBtn")

// Add event into Get in Touch button to navigate
getInTouchBtn.addEventListener('click', () => {
    navigateToPage(contactPage)
    // navigateToPage function defined in general.js file
    // variable contactPage defined in general.js file
})

// PROJECTS SECTION

// Get all articles in projects section
const getArticlesIds = [...document.querySelectorAll(".projectsArticle")]

// Function to generate project detail URL
function generateProjectURL(id) {
    const origin = window.location.origin
    return `${origin}/ironhack-midterm-project/Project/project.html?id=${id}`
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

// For each article: get the id, generate the URL, get the button, and add event listener to the button to redirect to specific project detail
getArticlesIds.forEach((article) => {
    let id = article.getAttribute("data-project-id")
    let url = generateProjectURL(id)
    let btnToProject = getBtnOfArticle(article)
    addEventBtnProject(btnToProject, url)
})