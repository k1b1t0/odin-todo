import Todo from "./todo";
import Project from "./project";
// parse input to Todo
function inputToTodo(title, description, due, priority) {
    // checking logic
    return Todo(title, description, due, priority)
}
// parse input to Project


function inputToProject(name){
    // checking logic
    return Project(name)
}