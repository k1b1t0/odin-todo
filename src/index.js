import "./style.css"

import Todo from "./core/todo.js"
import Project from "./core/project.js"
import { addELContent, addELProjectDiv, addELProjectForm, addELSidebar, addELTodoForm, loadContent, projectToHTML } from "./logic/dom.js"
import { displayProjects } from "./ui/allProjects.js"
import { displayTodos } from "./ui/projectView.js"

// project list
const projects = []

// init EL
addELContent(projects)
addELSidebar(projects)
addELProjectForm(projects)
addELTodoForm(projects)

// demo data
const a1 = new Todo("a1", 1, 1, 1, true)
const a2 = new Todo("a2", 2, 2, 2)
const b1 = new Todo("b1", 1, 1, 1,)
const b2 = new Todo("b2", 2, 2, 2,)

const pa = new Project("a")
const pb = new Project("b")

pa.addTodo(a1, a2)
pb.addTodo(b1, b2)

projects.push(pa, pb)

// show project list
loadContent(displayProjects(pa, pb))



