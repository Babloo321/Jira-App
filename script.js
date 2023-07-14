var uid = new ShortUniqueId();
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; //black
let textAreaCont = document.querySelector(".textarea-cont");
const mainCont = document.querySelector(".main-cont");
let ticketsArr = [];
let toolBoxColors = document.querySelectorAll(".color");
let removeBtn = document.querySelector(".remove-btn");

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";
//to open close modal container
let isModalPresent = false;
addBtn.addEventListener("click", function () {
  if (!isModalPresent) {
    modalCont.style.display = "flex"; //modal add ho gya screen pe
    // isModalPresent = true;
  } else {
    modalCont.style.display = "none";
    // isModalPresent = false;
  }
  isModalPresent = !isModalPresent; //toggling effect
});
// console.log(allPriorityColors);

//to remove and add active class from each priority color of modal container
allPriorityColors.forEach(function (colorElement) {
  colorElement.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElement.classList.add("active");
    modalPriorityColor = colorElement.classList[0];
  });
});

//to generate and display a ticket 
modalCont.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key == "Shift") {
    console.log(modalPriorityColor);
    console.log(textAreaCont.value);
    createTicket(modalPriorityColor, textAreaCont.value);
    modalCont.style.display = "none";
    isModalPresent = false;
    textAreaCont.value = "";
    allPriorityColors.forEach(function (colorElem) {
      colorElem.classList.remove("active");
    });
  }
});