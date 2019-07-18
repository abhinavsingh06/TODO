var addlist = document.querySelector("#list");
var addinput = document.querySelector("#addtodo");
function addhandler(elem) {
  if (elem.keyCode == 13) {
    //take input
    var val = addinput.value;
    //create list
    var li = document.createElement("li");
    //text in list
    li.textContent = val;
    //append list
    addlist.appendChild(li);
    addinput.value = "";
  }
}
function remhandler() {}
addinput.addEventListener("keydown", addhandler);
addinput.addEventListener("click", remhandler);
