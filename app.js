//Listen for submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  //Hide results
  document.getElementById("results").style.display = "none";

  //Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

//Calculate Results
function calculateResults() {
  //UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  //Taking the mathematical value out of entered numbers
  const principal = parseFloat(amount.value); //The float number amount of your loan
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedYears = parseFloat(years.value) * 12;

  //Computing the monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedYears);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedYears).toFixed(2);
    totalInterest.value = (monthly * calculatedYears - principal).toFixed(2);

    //Show the results
    document.getElementById("results").style.display = "block";
    //Hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
}

//Show Error function
function showError(error) {
  //Hide the results
  document.getElementById("results").style.display = "none";
  //Hide loader
  document.getElementById("loading").style.display = "none";

  //Create a div
  const errorDiv = document.createElement("div");

  //Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  //Add class
  errorDiv.className = "alert alert-danger";

  //Create text node and append to the div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  //Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

//Clear error
function clearError() {
  document.querySelector(".alert").remove();
}
