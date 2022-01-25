const navItem = document.querySelector("ul");
const frameSrc = document.querySelector("#frame-src");

// getting array from ul from HTML

const arr = Array.from(navItem.children);

// getting value from sessionStorage
const getList = sessionStorage.getItem("list");

// formatting list wrt inner HTML of ul
const newList = `. ${getList ? getList : "badge"}`;

// creating empty src
let src = "";

// passing default nav option in the iframe
const navElem = newList.split(" ")[1].toLowerCase();
const navOption = document.querySelector(`.${navElem}`);
navOption.style.color = "#133B6F";

src = `./${navElem}-component/index.html`;

// click event of navbar
navItem.addEventListener("click", function (e) {
  arr.forEach((item) => (item.style.color = "#fff"));
  const item = e.target.innerText;
  e.target.style.color = "#133B6F";

  const list = item.split(" ")[1].toLowerCase();

  // setting src of iframe
  src = `./${list}-component/index.html`;

  sessionStorage.setItem("list", `${list}`);

  // passing click event to iframe
  frameSrc.src = `${src}`;
});

// passing default nav option in the iframe
frameSrc.src = `${src}`;
