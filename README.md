# Ironhack Midterm Project

## Requirements
The project is based on the **design** provided in this Figma File: https://www.figma.com/file/fO1DtHTp1oVIV03V4o0kMx/mid-term-project?type=design&node-id=0-1&mode=design&t=1MhBfRFdA3Z6wwR6-0

## Project planning
Project **planning** tracked in this Trello Board: https://trello.com/b/P7RjGfmD/ironhack-midterm

## Project technologies
HTML, CSS, JS*

*Vanila JS: without any additional UI framework

## Website content
- **Pages**: website for a fictional web design company. This includes three pages:
    - a home page
    - a project page
    - a contact page with a form

- **HTML / CSS functionalities**
    - structure (HTML) and styling (CSS) of the three pages above following the design provided in Figma
    - responsive design for mobile and tablet devices using mediaqueries (CSS) for the three pages above
    - common header and footer for all the three pages. The header contains html links to allow navigation inside home page sections
      
- **JS fucntionatilies**
    - navigation between pages: from home to contact page (Get in Touch button), from any page header to contact page (Contact Us button), from Projects section in Home or Project pages to the specific project page of the selected project
    - contact form fields validation using RegEx
    - **Extra**: contact from DOM modification in response to form validaton: highlight/unhighlight the wrong input and remove data on form sucess
    - project page content dynamism by calling an endpoint with "fetch" to asynchronously treat the retrieved information and modify the HTML content based on it

## Project structure
- Folders:
    - index (home page) html, css & js files are not inside any subfolder
    - a folder for assets to save images and other resources
    - a folder for utils to save general css and js files used all around the project. Done for trying to avoid duplicated code
    - a folder for contact page html, css and js
    - a folder for project page html, css and js
- Branches: main (production), dev (hotfix development), other feature branches deleted during the gitflow process (homePage, contactPage, projectPage, jsBasics). Feature branches used to develop, then PR and merge to dev, and finally last PR and merger from dev to main.

## Project productive deployment
- The branch "main" of the project is linked to a Netlify automatic deployment
- When merging new changes in main branch, those should automatically be updated into the Netlify domain: https://aubahack.netlify.app/

## Technical decisions
### CSS
- **Use of CSS variables**:
    - used variables for colors
    - tried to use variables for breakpoints of responsive views but this is not available in CSS https://bholmes.dev/blog/alternative-to-css-variable-media-queries/ 
- **Responsive decisions**:
    - breakpoints for mobile and tablet are higher than the stardard because they worked better with the project implementation
    - clients section changed from flex (onw row) to grid (multiple rows) in responsive, but ideally I would have liked to have a carrussel
 
### JS
- **Events/Links**: all redirections have been done using events instead of links just to practice a bit more JS: e.g. project section -> project detail, contact button
- **Project detail dynamism**: project DOM manipulation for having dynamic content depending of the project has been done element by element instead of injection a huge html all together
- **Functions architecture**: tried to split the specific functionalities in short functions as much as possible. For this, it was useful to write first pseudocode on what to do.


## Pain points / Difficulties
### CSS
- **RULE / Reminder forever**: always put margin: 0 auto in the body
- **Fixed header**
    - I didn't know that the CSS command "position: fixed" takes "out" the element of the body, and thus all the body styles do not apply anymore to this element and need to be reapplied
    - also this forces to add specific styles for z position (on top of the rest of content), and background color
- **Hero section**:
    - cards position relative to the man image
    - it was tedious to adapt the desing for responsive, so finally changed and downloaded a resource with all the 3 images together in 1 image. But before that I practiced a lot with the 3 separateed images, just for fun! :)
- **CSS home page sections scroll**:
    - when clicking menu URLs I got redirected to the section but a bit below, due to the fixed header
    - I had to change all margin tops of the sections for padding tops and adapt the rest of sections margins/paddings and also adapt responsive - nightmare!
 
### General
- **JS contact page**: getting inputs at the beggining (on paage load) before completing and clicking send button, and of course they were always empty. It was anm adventure to detect this issue, but I got it after an intense debugging.
- **Project routing**: absolute routs (from repo folder) failed when deploying to netlify, I had to change all project routes
    - Troubles with the redirection form project section to Project detail with "Learn More" button. The redirection that I had did not work using Live Server VS extension, but I worked with a python server to run the web locally and also works it Netlify. I guess it might be something about he Live Server extension configuration.


## What did I learn?
- **I am a master in Git**! No issues at all with it during the product, and I enjoy gitflow. PD: maybe it is just because I am working on my own, let's see how it goes with the first team project....
- First autonomous project will html, css and vanila JS
- To highlight:
    - To be more specific with CSS styles target
    - Validate a form using JS -> what is RegEx and how to use it
    - Use window object to extract URL parts: origin, full url, etc
    - Connect JS files using imports and exports
    - Call and API and handle the response asynchronously
- **I would have liked**.... to have less styling work and more network/business logic work

## Next steps / Backlog

If I have had more time... I would have done the following developments / improvements:

- **CTA section**
    - hide/replace label and icon when clicking or writing
    - alarm or message in DOM to simulate info sending
    - send information to some API
 
- **Contact page**
    - replace browser alerts by nice styled messages added in the DOM
    - send information to some API

- **Home Page**
    - change navbar blue highlated title dynamically with click and scroll
 
- **Project Section & Page**
    - projects randomness using a JSON server
    - refactor: part of the code for the Learn More buttons event and URL generation is dupicated in two files due to lack of expertise and lack of time
 
- **General**
    - CSS animations (on button hovers, etc)
    - develop a navbar hamburguer menu for responsive view
    - develop a more complete responsive footer (with all contet)
    - add loaders when something is loading (mainly in images when I get them from API)
    - refactor copy-pasted html common sections between pages (e.g. header, footer...)
    - create 404 error page
    - try to refactor CSS measures form px to rem, I have been told that it facilitates a lot the responsive design
    - refactor the 
    - add unit tests

