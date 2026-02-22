class Todo {
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    // get detail
    getTodo() {
        return {
            title: this.#title,
            desc: this.#description,
            due: this.#dueDate,
            priority: this.#priority
        }
    }
}

export default Todo

