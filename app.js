//Listen for submit
document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

//Calculate Results
function calculateResults(e) {
  //UI Vars
  const amount = document.getElementById("amount");

  e.preventDefault();
}
