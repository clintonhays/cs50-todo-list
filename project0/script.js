// Global Variables

const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("listItems");

addButton.addEventListener("click", () => {
  newTodo(itemInput.value);

  itemInput.value = "";
});

function newTodo(value) {
  const html = `
    <li class="list__items_item">
      <p class="list__items__item_text">${value}</p>
      <div class="list__items__buttons">
        <button class="list__items__buttons_finished">O</button>
        <button class="list__items__buttons_delete">X</button>
      </div>
    </li>
  `;

  list.innerHTML += html;
}
