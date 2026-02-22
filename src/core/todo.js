class Todo {
    #title;
    #description;
    #dueDate;
    #priority;
    #id;
    #mark = false;

    constructor(title, description, dueDate, priority) {
        this.#title = title
        this.#description = description
        this.#dueDate = dueDate
        this.#priority = priority
        this.#mark = false
        this.#id = crypto.randomUUID()

        console.log("CREATED TODO")
        console.log({title, description, dueDate, priority})
    }

    // get detail
    getTodo() {
        const todo = {
            id: this.#id,
            title: this.#title,
            desc: this.#description,
            due: this.#dueDate,
            priority: this.#priority,
            mark: this.#mark
        }
        console.log(todo)
        return todo
    }

    mark() {
        this.#mark = true
    }

    isDone() {
        return this.#mark
    }
}

export default Todo


