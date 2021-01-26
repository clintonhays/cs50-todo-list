const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const checkboxes = document.querySelectorAll(".todo-checkbox");

itemCountSpan.innerHTML = 0;
let itemCount = 0;

uncheckedCountSpan.innerHTML = 0;
let uncheckedCount = 0;

function newTodo() {
  const todo = prompt("What would you like...todo?");
  const newLi = document.createElement("li");

  newLi.innerHTML = `
    <li class=${classNames.TODO_ITEM}>
      <p class=${classNames.TODO_TEXT}>${todo}</p>
      <input type="checkbox" class=${classNames.TODO_CHECKBOX}>
    <li>
  `;

  list.appendChild(newLi);
  itemCount++;
  itemCountSpan.innerHTML = itemCount;
}
