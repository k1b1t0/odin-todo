// get all projects and work them

import { addELProjectDiv, projectToHTML } from "../logic/dom.js"

function displayProjects(...projects) {
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project-div')
    

    const flatProjects = projects.flat()

    for (const project of flatProjects) {
        projectDiv.appendChild(projectToHTML(project))
    }
    
    return projectDiv
}

export {displayProjects}