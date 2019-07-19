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
//data array
const allTodo = [];
//add item
function addTodo(event) {
  if (event.keyCode == 13) {
    const unittodo = { text: todoInput.nodeValue, isDone: false };
  }
}
