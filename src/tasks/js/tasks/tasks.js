class Tasks {
    constructor(tasks,pinned) {
        this._tasks = tasks;
        this._pinned = pinned
    }
    addtask(title) {
        const task = this._tasks;
        const item = document.createElement('div');
        item.classList.add('task');
        const label = document.createElement('label');
        label.textContent = title;
        item.insertAdjacentElement('afterBegin',label);
        const chbox = document.createElement('input');
        chbox.type = 'checkbox';
        item.insertAdjacentElement('beforeEnd',chbox);
        task.insertAdjacentElement('afterBegin',item)
    }
    addpinnedtask(task) {
        task.classList.add('pinned')
        this._pinned.insertAdjacentElement('afterBegin',task)       

    }
}