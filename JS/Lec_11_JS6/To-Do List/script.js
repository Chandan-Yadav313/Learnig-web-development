const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".task-list");
const ul = document.createElement("ul")
taskList.appendChild(ul);

const inputBox = () => {
    const inputText = input.value;
    if (inputText.length == 0)
        return;
    const addTask = createTask(inputText);
    ul.appendChild(addTask);
    input.value = "";

    const removeTask = addTask.children[1];
    removeTask.addEventListener("click", function(){
        addTask.remove();
    })
}
button.addEventListener("click", inputBox);

const createTask =(inputText) =>{
    const div = document.createElement("div");
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    li.innerText = inputText;
    div.appendChild(li);
    div.appendChild(btn);
    return div;
}
