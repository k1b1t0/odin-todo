class Project {
    id;
    name;
    todos = [];

    constructor(name) {
        this.id = crypto.randomUUID()
        this.name = name
    }

    // add Todo
    addTodo(...todos) {
        this.todos.push(...todos)
        console.log('PROJECT' + this.id + 'ADDED' + todos)
    }

    // get all Todo
    getTodos() {
        console.log("PROJECT: " + this.name)
        for (const todo of this.todos) {
            console.log(todo)
        }
        
        return this.todos
    }

    // remove Todo
    removeTodo(id) {
        this.todos.splice(id, 1)
    }
}

export default Project