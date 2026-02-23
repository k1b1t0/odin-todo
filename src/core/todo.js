class Todo {
    #title;
    #description;
    #dueDate;
    #priority;
    #id;
    #mark = false;

    constructor(title, description, dueDate, priority, mark = false) {
        this.#title = title
        this.#description = description
        this.#dueDate = dueDate
        this.#priority = priority
        this.#mark = mark
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

    getId() {
        return this.#id
    }

    mark(mark) {
        this.#mark = mark
        console.log(this.#mark + this.#id)
    }

    isDone() {
        return this.#mark
    }
}

export default Todo


