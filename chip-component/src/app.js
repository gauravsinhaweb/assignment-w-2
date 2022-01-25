let chips = ["Apple", "Banana", "Kiwi", "Grape", "Orange"];
const button = document.getElementById("btn");
const chipsWrapper = document.getElementById("chips-wrapper");
const input = document.getElementById("add-chip");

function addRandomItem() {
  let index = Math.floor(Math.random() * chips.length);
  let div = document.createElement("div");
  div.className = "chip";
  div.innerHTML = `<span class="chip-name">${chips[index]}</span>
    <button onclick="dlt(event)">x</button>`;
  chipsWrapper.insertBefore(div, input);
}

function addItem(event) {
  if (event.keyCode === 13) {
    if (event.target.value === "") {
      alert("Oops! You forgot to add a chip!");
    } else {
      let div = document.createElement("div");
      div.className = "chip";
      div.innerHTML = `<span class="chip-name">${event.target.value}</span>
      <button onclick="dlt(event)">x</button>`;
      chipsWrapper.insertBefore(div, input);
      event.target.value = "";
    }
  }
}

window.dlt = function dlt(event) {
  console.log(event.target.parentElement.remove());
};

button.addEventListener("click", addRandomItem);
input.addEventListener("keyup", addItem);
