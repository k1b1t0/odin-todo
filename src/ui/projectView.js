import { todoToHTML } from "../logic/dom.js"

function displayTodos(project) {
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-div')
    todoDiv.dataset.projectId = project.id

    const projectName = document.createElement('h1')
    projectName.textContent = project.name
    todoDiv.appendChild(projectName)

    for (const todo of project.todos) {
        todoDiv.appendChild(todoToHTML(todo))
    }

    return todoDiv
}

export {displayTodos}