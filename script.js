let leads = [];
let inputText = document.querySelector("#input-text");
const submitBtn = document.querySelector("#submit-btn");
const listItems = document.querySelector("#ul-el");

submitBtn.addEventListener("click", function () {
  if (inputText.value === "") {
    alert("invalid entry");
    return false;
  } else {
    leads.push(inputText.value);
  }
  inputText.value = "";
  renderList();
});

function renderList() {
  let list = "";
  for (let i = 0; i < leads.length; i++) {
    list += `<li><a href = '${leads[i]}' target = '_blank'> ${leads[i]} </a></li>`;
  }
  listItems.innerHTML = list;
}
