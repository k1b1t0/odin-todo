import "./style.css"

import Todo from "./core/todo.js"
import Project from "./core/project.js"
import { projectToHTML } from "./logic/dom.js"

// project list
const projects = []

const a1 = new Todo("a1", 1, 1, 1)
const a2 = new Todo("a2", 2, 2, 2)
const b1 = new Todo("b1", 1, 1, 1,)
const b2 = new Todo("b2", 2, 2, 2,)

const pa = new Project("a")
const pb = new Project("b")

pa.addTodo(a1, a2)
pb.addTodo(b1, b2)


// show project list
pa.getTodos()
pb.getTodos()

const projectDiv = document.querySelector('.project-div')
projectDiv.appendChild(projectToHTML(pa))
projectDiv.appendChild(projectToHTML(pb))

