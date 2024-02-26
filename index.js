// Imports
import { generateProjectURL, getBtnOfArticle, addEventBtnProject, contactBtn, navigateToPage } from './Utils/general.js'

// HEADER

// Variable to save contact page absolute URL
const contactPage = "./Contact/contact.html"

// Add event into Contact Us button to navigate
contactBtn.addEventListener('click', () => {
    navigateToPage(contactPage)
})

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

// Project detail relative URL
const pdUrl = "./Project/project.html?id=" // ESTA MIERDA NO VA!!!!

// For each article: get the id, generate the URL, get the button, and add event listener to the button to redirect to specific project detail
getArticlesIds.forEach((article) => {
    let id = article.getAttribute("data-project-id")
    let url = generateProjectURL(id,pdUrl)
    let btnToProject = getBtnOfArticle(article)
    addEventBtnProject(btnToProject, url)
})