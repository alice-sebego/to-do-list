import * as util from './util.js';

// Elements on the DOM
const $form = document.querySelector("form");
const $inputTask = document.querySelector("#task");
const $info = document.querySelector("#info");
const $recap = document.querySelector("#recap");

const $ul = document.querySelector("ul");
const $done = document.querySelector(".done");
const $deleteTask = document.querySelector("#deleteTask");

// Array to fill with tasks
const taskList = [];

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
    $li.appendChild($label);

    const $span = document.createElement("span");
    $span.classList.add("description");
    $span.innerHTML = `${todo.task}`;
    $li.appendChild($span);

    const $button = document.createElement("button");
    $button.innerHTML = `<button class="deleteTask"><i class="fas fa-times"></i></button>`;
    $li.appendChild($button);

    $label.addEventListener("click", taskDone);
    // $deleteTask.addEventListener("click", deleteTask);
    $ul.appendChild($li);
    taskList.push($li);
}

const taskDone = (e)=>{
    e.target.parentNode.classList.toggle("taskDone");
}

