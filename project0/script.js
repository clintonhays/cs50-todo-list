// Global Variables
const addButton = document.getElementById("addButton");
const items = document.getElementById("tracking__count_item");
const unfinished = document.getElementById("tracking__count_unchecked");
const todoItems = document.getElementById("listItems");

items.innerHTML = 0;
unfinished.innerHTML = 0;

addButton.addEventListener("click", () => {
  const itemInput = document.getElementById("itemInput");

  newTodo(itemInput.value);

  itemInput.value = "";
  items.innerHTML++;
  unfinished.innerHTML++;
});

todoItems.addEventListener("click", (e) => {
  const target = e.target;
  const item = target.parentNode.parentNode;

  if (target.className === "list__items__buttons_delete") {
    item.remove();

    items.innerHTML--;
    unfinished.innerHTML--;
  }

  if (target.className === "list__items__buttons_finished") {
    const finishButtons = Array.from(document.querySelectorAll(".list__items__buttons_finished"));
    const removeButtons = Array.from(document.querySelectorAll(".list__items__buttons_delete"));
    const checkButtons = Array.from(document.querySelectorAll(".list__items__buttons_checked"));

    for (const [index, button] of removeButtons.entries()) {
      if (finishButtons.indexOf(target) === index) {
        button.classList.toggle("hidden");
      }
    }

    for (const [index, button] of checkButtons.entries()) {
      if (finishButtons.indexOf(target) === index) {
        button.classList.toggle("hidden");
      }
    }

    target.classList.toggle("hidden");
    unfinished.innerHTML--;
  }

  if (target.classList.contains("lni-checkmark")) {
    const finishButtons = Array.from(document.querySelectorAll(".list__items__buttons_finished"));
    const removeButtons = Array.from(document.querySelectorAll(".list__items__buttons_delete"));
    const checkButtons = Array.from(document.querySelectorAll(".lni-checkmark"));

    for (const [index, button] of finishButtons.entries()) {
      if (checkButtons.indexOf(target) === index) {
        button.classList.toggle("hidden");
      }
    }

    for (const [index, button] of removeButtons.entries()) {
      if (checkButtons.indexOf(target) === index) {
        button.classList.toggle("hidden");
      }
    }

    target.parentNode.classList.toggle("hidden");
    unfinished.innerHTML++;
  }
});

function newTodo(value) {
  const list = document.getElementById("listItems");

  const html = `
    <li class="list__items_item">
      <p class="list__items__item_text">${value}</p>
      <div class="list__items__buttons">
        <button class="list__items__buttons_checked hidden"><i class="lni lni-checkmark"></i></button>
        <button class="list__items__buttons_finished">O</button>
        <button class="list__items__buttons_delete">X</button>
      </div>
    </li>
  `;

  list.innerHTML += html;
}
