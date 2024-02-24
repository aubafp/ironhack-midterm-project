// Definition of API URL to call
const apiUrl = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"

// ASYNC function to call a service passed as parameter
async function getServerProjectsInfo(url) {
    try {
        const response = await fetch(url)
        return response.json()
    }
    catch (err) {
    console.log(err);
    }
}

// Function to call in the event listener that will call to all necessary operations to display the correct dynamic project detail page content
async function loadPageContent() {
    // console.log("reeesult---",getServerProjectsInfo(apiUrl))
    const projectsInfo = await getServerProjectsInfo(apiUrl)
    // function to get Id from URL
    // function to convert the server response into nice data filtering by current project (Id of URL) - return an object with the current project data
    // function for DOM modification of HTML to add the project content
    // function to convert the server response into nice data filtering by ALL projects except of current project (Id of URL) - return an array of objects with the others projects data
    // function for DOM modification of HTML to add the Other projects content (should never be the same of the project where I am, so take the other 3 available projects)
}


// On load event to be able to display content dynamically depending on the project I am

window.addEventListener("load", () => {
    loadPageContent()
  });