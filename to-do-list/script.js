var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked!")
};

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var ToDoItem = document.createElement("li");
    var ToDoText = document.createTextNode(itemText);
    ToDoItem.appendChild(ToDoText);
}