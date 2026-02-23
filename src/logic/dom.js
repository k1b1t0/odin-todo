import { displayProjects } from "../ui/allProjects.js"
import { displayTodos } from "../ui/projectView.js"
import Project from "../core/project.js"
import Todo from "../core/todo.js"

const contentDiv = document.querySelector('.content')
const sidebar = document.querySelector('#sidebar')

const projectModal = document.querySelector('#project-modal')
const projectForm = document.querySelector('#project-form')
const projectModalClose = document.querySelector('#close-project-modal')

const todoModal = document.querySelector('#todo-modal')
const todoForm = document.querySelector('#todo-form')
const todoModalClose = document.querySelector('#close-todo-modal')

function loadContent(content) {
    contentDiv.innerHTML = ''
    contentDiv.appendChild(content)
}

function loadProjectDropdown(projects) {
    const select = document.querySelector('#todo-project')

    select.innerHTML = ''

    projects.forEach((project) => {
        const option = document.createElement('option')
        option.value = project.id
        option.textContent = project.name

        select.appendChild(option)
    })
}

function addELTodoForm(projects) {
    todoModalClose.addEventListener('click', () => todoModal.close())
    todoForm.addEventListener('submit', (e) => {
        const formData = new FormData(todoForm)
        const title = formData.get('title')
        const description = formData.get('description')
        const date = formData.get('due')
        const mark = formData.get('mark')
        const priority = formData.get('priority')
        const projectId = formData.get('project')

        const project = projects.find((project) => project.id === projectId)
        if (project) {
            const todo = new Todo(title, description, date, priority, mark)
            project.addTodo(todo)
        }

        const projectDiv = document.querySelector('.project-div')
        if (projectDiv) {
            loadContent(displayProjects(projects))
        }

        todoForm.reset()
    })
}

function addELProjectForm(projects) {
    projectModalClose.addEventListener('click', () => projectModal.close())
    projectForm.addEventListener('submit', (e) => {
        const formData = new FormData(projectForm)
        const name = formData.get('projectName')

        const newProject = new Project(name)

        projects.push(newProject)
        console.log(name + 'CREATED')

        const projectDiv = document.querySelector('.project-div')
        if (projectDiv) {
            projectDiv.appendChild(projectToHTML(newProject))
        }

        projectForm.reset()
    })
}

function addELSidebar(projects) {
    sidebar.addEventListener('click', (e) => {
        const h2 = e.target.closest('h2')
        if (h2) {
            const id = h2.id
            switch (id) {
                case 'projects':
                    loadContent(displayProjects(projects))
                    break
                case 'add-project':
                    projectModal.showModal()
                    break
                case 'add-todo':
                    loadProjectDropdown(projects)
                    todoModal.showModal()
                    break
                default:
                    return
            }
        }
    })
}

function addELContent(projects) {
    contentDiv.addEventListener('click', (e) => {

        // delete
        const deleteProjectTarget = e.target.closest('.delete-button')
        if (deleteProjectTarget) {
            const projectId = e.target.closest('.project-card').dataset.projectId
            const index = projects.findIndex(project => project.id === projectId)
            if (index !== -1) {
                projects.splice(index, 1)
            }
            loadContent(displayProjects(projects))
        }

        // details
        const detailTarget = e.target.closest('.name') || e.target.closest('.detail-button')
        if (detailTarget) {
            const projectId = e.target.closest('.project-card').dataset.projectId
            const targetProject = projects.find(project => project.id === projectId)
            loadContent(displayTodos(targetProject))
        }

        // todos
        const todoTarget = e.target.closest('input')
        if (todoTarget) {

            const todoDiv = e.target.closest('.todo-undone, .todo-done')
            const todoId = todoDiv.dataset.todoId

            // projectId
            const projectDiv = e.target.closest('.project-card') || e.target.closest('.todo-div')
            const projectId = projectDiv.dataset.projectId
            
            const targetProject = projects.find(project => project.id === projectId)
            const targetTodo = targetProject.todos.find(todo => todo.getId() === todoId)

            if (todoTarget.checked) {
                todoDiv.classList.remove('todo-undone')
                todoDiv.classList.add('todo-done')
            } else {
                todoDiv.classList.add('todo-undone')
                todoDiv.classList.remove('todo-done')
            }

            targetTodo.mark(todoTarget.checked)
        }
    })
}

function projectToHTML(project) {
    // node class and data
    const projectNode = document.createElement('div')
    projectNode.classList.add('project-card')
    projectNode.dataset.projectId = project.id

    // project name
    const projectName = document.createElement('h1')
    projectName.classList.add('name')
    projectName.textContent = project.name
    projectNode.appendChild(projectName)

    // project todos
    for (const todo of project.todos) {
        const {title, id} = todo.getTodo()
        const todoLine = document.createElement('div')
        const checkbox = document.createElement('input')
        const label = document.createElement('label')

        checkbox.type = 'checkbox'
        checkbox.id = id
        checkbox.name = id
        checkbox.value = id

        label.setAttribute('for', id)
        label.textContent = title

        todoLine.append(checkbox, label)

        if (todo.isDone()) {
            todoLine.classList.add('todo-done')
            checkbox.checked = true
        } else {
            todoLine.classList.add('todo-undone')
        }
        todoLine.dataset.todoId = id
        projectNode.appendChild(todoLine)
    }

    const detailButton = document.createElement('button')
    detailButton.textContent = "details"
    detailButton.classList.add('detail-button')
    projectNode.appendChild(detailButton)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "delete"
    deleteButton.classList.add('delete-button')
    projectNode.appendChild(deleteButton)

    return projectNode
}

function todoToHTML(todo) {
    const {title, id, due} = todo.getTodo()
    const todoLine = document.createElement('div')
    const checkbox = document.createElement('input')
    const label = document.createElement('label')
    const date = document.createElement('p')

    checkbox.type = 'checkbox'
    checkbox.id = id
    checkbox.name = id
    checkbox.value = id

    label.setAttribute('for', id)
    label.textContent = title

    date.textContent = due

    todoLine.append(checkbox, label, date)

    if (todo.isDone()) {
        todoLine.classList.add('todo-done')
        checkbox.checked = true
    } else {
        todoLine.classList.add('todo-undone')
    }
    todoLine.dataset.todoId = id

    return todoLine
}

export {todoToHTML, projectToHTML, addELContent, loadContent, addELSidebar, addELProjectForm, addELTodoForm}