let menuDiv = document.getElementById("menu");
let logbookDiv = document.getElementById("logbook");
let summaryDiv = document.getElementById("summary");

let menuBtn = document.getElementById("menu_Btn");
let logbookBtn = document.getElementById("logbook_Btn");
let summaryBtn = document.getElementById("summary_Btn");

menuBtn.onclick = function () {
  menuDiv.classList.remove("hidden");
  logbookDiv.classList.add("hidden");
  summaryDiv.classList.add("hidden");
};

logbookBtn.onclick = function () {
  menuDiv.classList.add("hidden");
  logbookDiv.classList.remove("hidden");
  summaryDiv.classList.add("hidden");
};

summaryBtn.onclick = function () {
  menuDiv.classList.add("hidden");
  logbookDiv.classList.add("hidden");
  summaryDiv.classList.remove("hidden");
};

let subDataDiv = document.getElementById("subData");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", (evt) => {
  menuDiv.classList.add("hidden");
  subDataDiv.classList.remove("hidden");
  evt.preventDefault();
});

const editBtn = document.getElementById("edit");

editBtn.onclick = function () {
  menuDiv.classList.remove("hidden");
  subDataDiv.classList.add("hidden");
};

const select = document.querySelector("#topics");
console.log(select);
console.log(teachingProgram);
teachingProgram.forEach((element) => {
  const optGr = document.createElement("optgroup");
  optGr.label = `${element.name}`;
  element.topic.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.innerText = option;
    optGr.append(opt);
  });
  select.appendChild(optGr);
});
