let leads = [];
let inputText = document.querySelector("#input-text");
const submitBtn = document.querySelector("#submit-btn");
const listItems = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
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
  render(leads);
});

inputText.addEventListener("keyup", function () {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#submit-btn").click();
  }
});

if (leadsFromLocalStorage) {
  leads = leadsFromLocalStorage;
  render(leads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    leads.push(tabs[0].url);
    localStorage.setItem("leads", JSON.stringify(leads));
    render(leads);
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  leads = [];
  listItems.innerHTML = "";
  inputText.value = "";
  render(leads);
});

function render(myLeads) {
  let list = "";
  for (let i = 0; i < myLeads.length; i++) {
    list += `<li><a href = '${myLeads[i]}' target = '_blank'> ${myLeads[i]} </a></li>`;
  }
  listItems.innerHTML = list;
}
