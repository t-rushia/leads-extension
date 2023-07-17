let leads = [];
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("leads"));
let inputText = document.querySelector("#input-text");
const submitBtn = document.querySelector("#submit-btn");
const listItems = document.querySelector("#ul-el");

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

if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage;
  renderList();
}

function renderList() {
  let list = "";
  for (let i = 0; i < leads.length; i++) {
    list += `<li><a href = '${leads[i]}' target = '_blank'> ${leads[i]} </a></li>`;
  }
  listItems.innerHTML = list;
}
