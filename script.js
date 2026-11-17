

// ======================================
// SNACKCALC - SNACK CALCULATOR
// ======================================

const snackForm = document.getElementById("snackForm");

snackForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const currentAge = Number(document.getElementById("currentAge").value);
  const targetAge = Number(document.getElementById("targetAge").value);
  const snackName = document.getElementById("snackName").value.trim();
  const snacksPerDay = Number(document.getElementById("snacksPerDay").value);
  const snackPrice = Number(document.getElementById("snackPrice").value);

  if (
    currentAge <= 0 ||
    targetAge <= currentAge ||
    targetAge > 120 ||
    snackName === "" ||
    snacksPerDay < 0 ||
    snackPrice < 0
  ) {
    alert("Please enter valid information. Your target age must be greater than your current age.");
    return;
  }

  // Calculate the number of years remaining
  const yearsRemaining = targetAge - currentAge;

  // Calculate total days
  const totalDays = yearsRemaining * 365;

  // Calculate total snacks
  const totalSnacks = Math.round(totalDays * snacksPerDay);

  // Calculate total cost
  const totalCost = totalSnacks * snackPrice;

  // Display results
  document.getElementById("snackCount").textContent =
    totalSnacks.toLocaleString("es-AR");

  document.getElementById("snackResultName").textContent =
    `${snackName} snacks in your lifetime`;

  document.getElementById("snackTotalCost").textContent =
    formatMoney(totalCost);

  document.getElementById("snackYears").textContent =
    `${yearsRemaining} years`;

  document.getElementById("snackResult").classList.add("calculated");
});


// ======================================
// TRAVEL BUDGET CALCULATOR
// ======================================

const travelForm = document.getElementById("travelForm");

travelForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const tripDays = Number(document.getElementById("tripDays").value);
  const mealsPerDay = Number(document.getElementById("mealsPerDay").value);
  const travelBudget = Number(document.getElementById("travelBudget").value);

  if (
    tripDays <= 0 ||
    mealsPerDay <= 0 ||
    travelBudget < 0
  ) {
    alert("Please enter valid travel information.");
    return;
  }

  // Calculate total meals
  const totalMeals = tripDays * mealsPerDay;

  // Calculate budget per meal
  const budgetPerMeal = travelBudget / totalMeals;

  // Calculate budget per day
  const budgetPerDay = travelBudget / tripDays;

  // Display results
  document.getElementById("budgetPerMeal").textContent =
    formatMoney(budgetPerMeal);

  document.getElementById("totalMeals").textContent =
    totalMeals.toLocaleString("es-AR");

  document.getElementById("budgetPerDay").textContent =
    formatMoney(budgetPerDay);

  document.getElementById("travelResult").classList.add("calculated");
});


// ======================================
// MONEY FORMAT
// ======================================

function formatMoney(amount) {
  return amount.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2
  });
}
