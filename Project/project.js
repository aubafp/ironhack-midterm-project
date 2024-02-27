// Imports
import { generateProjectURL, getBtnOfArticle, addEventBtnProject, contactBtn, navigateToPage } from '../Utils/general.js'

// HEADER

// Variable to save contact page absolute URL
const contactPage = "../Contact/contact.html"

// Add event into Contact Us button to navigate
contactBtn.addEventListener('click', () => {
    navigateToPage(contactPage)
})

// Definition of API URL to call
const apiUrl = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"

// ASYNC function to call a service passed as parameter
async function getServerProjectsInfo(url) {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (err) {
        alert(err.message);
        return []
    }
    // on success it returns the API response parsed into json format
}

// Function to get Id from URL using URLSearchParams functionality
function getIdFromUrl() {
    const url = window.location.search // get current URL
    const searchParams = new URLSearchParams(url); // create instance of URLSearchParams class
    return searchParams.get("id") // use the class method get to take the url parameter called id and return the id value
    // it returns the value of the url parameter called id
}

// Function to get object with current page information (id of page) - return object with current project information
function getCurrentProjectData(allProjects, id) {
    const currentProject = allProjects.filter((project) => {
        return project.uuid === id
    })
    return currentProject[0]
    // returns an object with currrent project data
}

// Function to get array with ALL projects except of current project 
function getOtherProjectsData(allProjects, id) {
    const otherProjects = allProjects.filter((project) => {
        return project.uuid != id
    })
    return otherProjects
    // returns an array of objects with the others projects data
}

// Function for DOM modification of HTML to add the project content
function modifyProjectDetailHtml(projectObj) {
    // get DOM elements
    const domTitle = document.querySelector("h1")
    const domSubtitleDescription = document.querySelector("#subtitleDescription")
    const domDateCompletion = document.querySelector("#dateCompletion")
    const domImage = [...document.querySelectorAll("#image img")]
    const domGeneralDescription = document.querySelector("#generalDescription")

    // destructure object information into variables
    const { completed_on, content, description, image, name, uuid } = projectObj;

    // modify DOM elements content
    domTitle.innerHTML = name
    domSubtitleDescription.innerHTML = description
    domDateCompletion.innerHTML = `<b>Completed on</b> ${completed_on}`
    domImage.forEach((img) => {
        img.src = image
    })
    domGeneralDescription.innerHTML = `<p>${content}</p>`
}

// Project detail relative URL
const pdUrl = "/Project/project.html?id=" // ESTO TAMPOCO VA ASDFASDFASD

// Function for DOM modification of HTML to add the Other projects section content
function modifyOtherProjectsHtml(projectsArray) {
    // get DOM elements
    const articles = [...document.querySelectorAll("article")]

    // For each article....
    articles.forEach((article, index) => {

        // Get inner html elements
        let domImage = article.querySelector("img")
        let domTitleArticle = article.querySelector("#titleArticle")
        let domDescriptionArticle = article.querySelector("#descriptionArticle")
        let domLmoreButton = getBtnOfArticle(article)

        // Destructure object
        let { completed_on, content, description, image, name, uuid } = projectsArray[index];

        // Modify DOM elements
        domImage.src = image;
        domTitleArticle.innerHTML = name;
        domDescriptionArticle.innerHTML = description;

        // Modify button: Generate and Add URL -> call general.js functions
        let urlProject = generateProjectURL(uuid, pdUrl)
        addEventBtnProject(domLmoreButton, urlProject)
    })
}


// Function to call in the event listener that will call to all necessary operations to display the correct dynamic project detail page content
async function loadPageContent() {
    // get projects info from API
    const allProjectsInfo = await getServerProjectsInfo(apiUrl)

    // get id from URL
    const id = getIdFromUrl()

    // get current project data as an object
    const currentProject = getCurrentProjectData(allProjectsInfo, id)

    // get other projects data as an array of objects
    const otherProjects = getOtherProjectsData(allProjectsInfo, id)

    // modify project detail html with current project data
    modifyProjectDetailHtml(currentProject)

    // modify other projects html with the rest of projects data
    modifyOtherProjectsHtml(otherProjects)
}


// On load event to be able to display content dynamically depending on the project I am

window.addEventListener("load", () => {
    loadPageContent()
});