//icon toggle
var flag = 0;

$(".button").on("click", function() {
  if (flag == 0) {
    on();
    flag = 1;
  } else {
    off();
    flag = 0;
  }
});
//toggle on
function on() {
  $("input").addClass("rotate-input");
  $(".button").addClass("button-rotate");
  $(".tools").addClass("tools-rotate");
}
//toggle off
function off() {
  $("input").removeClass("rotate-input");
  $(".button").removeClass("button-rotate");
  $(".tools").removeClass("tools-rotate");
}
//selectors
const todoInput = document.querySelector(".todo-input");
const ul = document.querySelector("ul");
const all = document.querySelector(".all--btn");
const active = document.querySelector(".active--btn");
const complete = document.querySelector(".complete--btn");
//data array
const allTodo = [];
//add item
function addTodo(event) {
  if (event.keyCode == 13) {
    const singletodo = { text: todoInput.value, isDone: false };
    if (todoInput.value.trim()) {
      allTodo.push(singletodo);
      todoInput.value = "";
      createUI(allTodo);
    }
  }
}
//UI function
function createUI(data = []) {
  ul.innerHTML = "";
  data.forEach((todo, index) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = todo.text;
    const input = document.createElement("input");
    input.classList.add("list");
    input.type = "checkbox";
    input.addEventListener("click", handleCheck);
    input.checked = todo.isDone;
    input.setAttribute("data-id", index);
    const span = document.createElement("span");
    span.textContent = "x";
    span.setAttribute("data-id", index);
    span.addEventListener("click", deleteTodo);
    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(span);
    ul.appendChild(li);
  });
}
function handleCheck(event) {
  const id = event.target.dataset.id;
  allTodo[id].isDone = !allTodo[id].isDone;
  createUI(allTodo);
}
function deleteTodo(event) {
  const id = event.target.dataset.id;
  allTodo.splice(id, 1);
  createUI([{ text: "deleted", isDone: false }]);
}
function showCompleted() {
  const done = allTodo.filter(todo => todo.isDone);
  createUI(done);
}
function showActive() {
  const done = allTodo.filter(todo => todo.isDone === false);
  createUI(done);
}
function showAll() {
  createUI(allTodo);
}
todoInput.addEventListener("keydown", addTodo);
complete.addEventListener("click", showCompleted);
all.addEventListener("click", showAll);
active.addEventListener("click", showActive);
