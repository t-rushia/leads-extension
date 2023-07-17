let leads = [];
let inputText = document.querySelector("#input-text");
const submitBtn = document.querySelector("#submit-btn");
const listItems = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));

submitBtn.addEventListener("click", function () {
  if (inputText.value === "") {
    alert("invalid entry");
    return false;
  } else {
    leads.push(inputText.value);
    localStorage.setItem("leads", JSON.stringify(leads));
  }
  inputText.value = "";
  renderList();
});

inputText.addEventListener("keyup", function () {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#submit-btn").click();
  }
});

if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage;
  renderList();
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  leads = [];
  listItems.innerHTML = "";
  inputText.value = "";
});

function renderList() {
  let list = "";
  for (let i = 0; i < leads.length; i++) {
    list += `<li><a href = '${leads[i]}' target = '_blank'> ${leads[i]} </a></li>`;
  }
  listItems.innerHTML = list;
}
