import Todo from "../core/todo.js";
import Project from "../core/project.js";

// parse input to Todo
function inputToTodo(title, description, due, priority) {
    // checking logic
    const todo = new Todo(title, description, due, priority)
    console.log(todo)
    return todo
}

// parse input to Project
function inputToProject(name){
    // checking logic
    const project = new Project(name)
    console.log(project)
}