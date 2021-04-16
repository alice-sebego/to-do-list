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
    $li.innerHTML = `
    <input type="checkbox" name="done" class="done" tabindex="0">
    <label for="done" tabindex="0" class="labelDone"></label> 
    <span class="description">${todo.task}</span>
    <button class="deleteTask"><i class="fas fa-times"></i></button> 
    `;
    $done.addEventListener("click", taskDone);
    // $deleteTask.addEventListener("click", deleteTask);
    $ul.appendChild($li);
    taskList.push($li);
}

const taskDone = (e)=>{
    e.target.parentNode.classList.toggle("taskDone");
}