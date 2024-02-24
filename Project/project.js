// Definition of API URL to call
const apiUrl = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"

// ASYNC function to call a service passed as parameter
async function getServerProjectsInfo(url) {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (err) {
        alert(err.message);
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


// Function to call in the event listener that will call to all necessary operations to display the correct dynamic project detail page content
async function loadPageContent() {
    const allProjectsInfo = await getServerProjectsInfo(apiUrl)
    const id = getIdFromUrl()
    const currentProject = getCurrentProjectData(allProjectsInfo, id)
    const otherProjects = getOtherProjectsData(allProjectsInfo, id)

    console.log(currentProject)
    console.log(otherProjects)


    // function for DOM modification of HTML to add the project content


    // function for DOM modification of HTML to add the Other projects content (should never be the same of the project where I am, so take the other 3 available projects)
}


// On load event to be able to display content dynamically depending on the project I am

window.addEventListener("load", () => {
    loadPageContent()
});