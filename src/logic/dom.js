function projectToHTML(project) {
    const projectNode = document.createElement('div')
    projectNode.classList.add('project-card')

    const projectName = document.createElement('h1')
    projectName.classList.add('name')
    projectName.textContent = project.name

    projectNode.appendChild(projectName)

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
        } else {
            todoLine.classList.add('todo-undone')
        }
        
        projectNode.appendChild(todoLine)
    }

    return projectNode
}

export {projectToHTML}