// Elements on the DOM
const $form = document.querySelector("form");
const $inputTask = document.querySelector("#task");
const $addButton = document.querySelector("#add");
const $recap = document.querySelector("#recap");

const $ul = document.querySelector("ul");
const $done = document.querySelector("#done");
const $deleteTask = document.querySelector("#deleteTask");

$addButton.addEventListener("click", e =>{

    e.preventDefault();

    let task = $inputTask.value;

    if(task.length > 0){
        const $li = document.createElement("li");
        $li.setAttribute("tabindex", "0");
        $li.innerHTML = `
        <input type="checkbox" name="done" id="done" tabindex="0">
        <label for="done" tabindex="0"></label> 
        <span class="description">${task}</span>
        <input type="checkbox" name="deleteTask" id="deleteTask" tabindex="0">
        <label for="deleteTask" tabindex="0"></label> 
        `;
        $ul.appendChild($li);
        $form.reset();
    } else {
        $recap.innerHTML = `Entrer une tâche valide SVP`;
    }
    
});