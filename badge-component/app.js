const hideBtn = document.querySelector(".btn-hide");
const badgeHide = document.querySelector(".badge-hide");
const actionBtn = document.querySelector(".action");
const badgeAction = document.querySelector(".badge-action");
let On = true;
let count = 8;
hideBtn.addEventListener("click", () => {
  On = !On;
  On
    ? (badgeHide.style.display = "inline")
    : (badgeHide.style.display = "none");
});

actionBtn.addEventListener("click", () => {
  count += 1;
  badgeAction.innerHTML = count;
  if (count > 9) {
    badgeAction.style.fontSize = "1.6rem";
  }
});
