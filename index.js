// Imports
import { generateProjectURL, getBtnOfArticle, addEventBtnProject } from '/ironhack-midterm-project/Utils/general.js'

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

// Functions used are in genreral.js, since they will also be needed in the projects.js file

// For each article: get the id, generate the URL, get the button, and add event listener to the button to redirect to specific project detail
getArticlesIds.forEach((article) => {
    let id = article.getAttribute("data-project-id")
    let url = generateProjectURL(id)
    let btnToProject = getBtnOfArticle(article)
    addEventBtnProject(btnToProject, url)
})