import * as util from './util.js';

// Elements on the DOM
const $form = document.querySelector("form");
const $inputTask = document.querySelector("#task");
const $info = document.querySelector("#info");
const $recap = document.querySelector("#recap");

const $ul = document.querySelector("ul");
const $done = document.querySelector(".done");
const $deleteTask = document.querySelector(".deleteTask");

// Array to fill with tasks
let taskList = [];

$form.addEventListener("submit", e =>{

    e.preventDefault();

    let task = $inputTask.value.trim();

    if(task.length > 0){

        createTask(task);
        $form.reset();

    } else {

        $info.innerHTML = `Entrer une tâche valide SVP`;
        util.emptyTxtContent($info);

    }

});

const createTask = (task) =>{

    const todo = {
        task,
        id: Date.now()
    }

    addTask(todo);

}

const addTask = (todo) =>{
    const $li = document.createElement("li");
    $li.setAttribute("tabindex", "0");
    $li.setAttribute("data-key", todo.id);
    
    const $input = document.createElement("input");
    $input.setAttribute("type", "checkbox");
    $input.setAttribute("name", "done");
    $input.setAttribute("tabindex", "0");
    $input.setAttribute("id", todo.id);
    $input.classList.add("done");
    $li.appendChild($input);

    const $label = document.createElement("label");
    $label.setAttribute("for", todo.id);
    $label.setAttribute("tabindex", "0");
    $label.addEventListener("click", taskDone);
    $li.appendChild($label);

    const $span = document.createElement("span");
    $span.classList.add("description");
    $span.innerHTML = `${todo.task}`;
    $li.appendChild($span);

    const $button = document.createElement("button");
    $button.classList.add("deleteTask");
    $button.innerHTML = `<i class="fas fa-times"></i>`;
    $button.addEventListener("click", deleteTask);
    $li.appendChild($button);

    $ul.appendChild($li);
    taskList.push($li);
}

const taskDone = (e) =>{
    e.target.parentNode.classList.toggle("taskDone");
}

const deleteTask = (e) =>{

    for(let task of taskList){
        if(e.target.parentNode.getAttribute("data-key") === task.getAttribute("data-key")){
            task.remove();
            taskList = taskList.filter(li => li.dataset.key !== task.dataset.key);
        }
    }
    
}

