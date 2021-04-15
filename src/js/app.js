import * as util from './util.js';

// Elements on the DOM
const $form = document.querySelector("form");
const $inputTask = document.querySelector("#task");
const $info = document.querySelector("#info");
const $recap = document.querySelector("#recap");

const $ul = document.querySelector("ul");
const $done = document.querySelector("#done");
const $deleteTask = document.querySelector("#deleteTask");

// Array to fill with tasks
const taskList = [];

$form.addEventListener("submit", e =>{

    e.preventDefault();

    let task = $inputTask.value.trim();

    if(task.length > 0){

        addTask(task);
        $form.reset();

    } else {

        $info.innerHTML = `Entrer une tâche valide SVP`;
        util.emptyTxtContent($info);

    }

});

const addTask = (task) =>{
    const $li = document.createElement("li");
    $li.setAttribute("tabindex", "0");
    $li.innerHTML = `
    <input type="checkbox" name="done" id="done" tabindex="0">
    <label for="done" tabindex="0"></label> 
    <span class="description">${task}</span>
    <button class="deleteTask"><i class="fas fa-times"></i></button> 
    `;
    $ul.appendChild($li);
}