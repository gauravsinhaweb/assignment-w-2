const snackBar = document.querySelector(".snackbar");
const sbLead = document.querySelector(".sb-leading");
const sbStacked = document.querySelector(".sb-stacked");

const wrapper = document.querySelector(".btns");

const btnArr = Array.from(wrapper.children);

snackBar.style.display = "none";
sbLead.style.display = "none";
sbStacked.style.display = "none";

wrapper.addEventListener("click", (e) => {
  let selectedClass = e.target.innerHTML;

  if (selectedClass === "baseline") {
    snackBar.style.display = "flex";

    setTimeout(() => {
      snackBar.style.display = "none";
    }, 5000);
  } else if (selectedClass === "leading") {
    sbLead.style.display = "flex";
    setTimeout(() => {
      sbLead.style.display = "none";
    }, 5000);
  } else if (selectedClass === "stacked") {
    sbStacked.style.display = "flex";
    setTimeout(() => {
      sbStacked.style.display = "none";
    }, 5000);
  }
});
