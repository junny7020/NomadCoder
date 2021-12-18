const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    // use JSON.parse(localStorage.getItem("todos")); to change back to an array
}

function deletToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // li.id type is String!! 
    // so this won't work! toDos = toDos.filter(toDos => toDos.id !== li.id);
    // toDos.id is integer
    toDos = toDos.filter(toDos => toDos.id !== parseInt(li.id));
    saveToDos();

}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deletToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handletoDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handletoDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos =parsedToDos;
    parsedToDos.forEach(paintToDo);
}

// function sexyFilter(todo) {
// // returns true or false
//     return todo.id !== //....
// }

//array.filter(sexyFilter) --> do filter for eaach item in the array...
// if sexyFilter(item) is true, then keep the item in the array
// if false don't put the item in the array
// array.filter(sexyFilter) at the end returns a new array that fits the sexyFilter condition