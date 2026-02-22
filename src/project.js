class Project {
    name;
    todos = [];

    constructor(name) {
        this.name = name
    }

    // add Todo
    addTodo(todo) {
        this.todos.push(todo)
    }

    // display all Todo
    getTodos() {
        return todos
    }

    // remove Todo
    removeTodo(id) {
        this.todos.splice(id, 1)
    }

}