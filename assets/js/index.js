const todoAddButton = document.getElementById("todoAddButton");
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoClearAllButton = document.getElementById('todoClearAllButton');
const todoTaskCounter = document.getElementById('todoTaskCounter');

todoInput.onkeyup = function(event){
    if(event.code === 'Enter'){
        todoAddButton.click();
    }
}

todoAddButton.onclick = function () {
    const todoDescription = todoInput.value;
    const task = createTask(todoDescription);
    todoList.appendChild(task);
    clearInput();
    incrementTaskCounter();
}

todoClearAllButton.onclick = function () {
    clearInput();
    todoList.innerHTML = '';
    todoTaskCounter.textContent = '0';
}

/**
 * Creates a task.
 * @param description
 */
function createTask(description) {
    if(!description.trim()){
        alert('Debes agregar un texto valido');
        clearInput();//Anotacion extra
        return;
    }
    const task = document.createElement('div');
    task.setAttribute('class', 'todo-task');

    const taskDescription = document.createElement('span');
    taskDescription.setAttribute('class', 'todo-task-description');
    taskDescription.textContent = description;

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.setAttribute('class', 'todo-task-delete-button');
    taskDeleteButton.textContent = 'x';
    taskDeleteButton.onclick = function () {
        this.parentNode.remove();
    };

    task.appendChild(taskDescription)
    task.appendChild(taskDeleteButton);

    return task;
}

function incrementTaskCounter(){
    todoTaskCounter.textContent = String(Number(todoTaskCounter.textContent) + 1);
}

function clearInput(){
    todoInput.value = '';
}
