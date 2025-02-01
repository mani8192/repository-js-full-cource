const BASE_URL = "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest"; // Replace YOUR_API_KEY with your actual API key
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// // Ensure there is no redeclaration of countryList; it might be declared elsewhere
// const countryList = {
//   USD: "US",
//   INR: "IN",
//   // Add other currency codes and their respective countries
// };

// Populate dropdowns with currency options
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Update the exchange rate
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}`;

  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const text = await response.text(); // Get the raw response as text
    try {
      const data = JSON.parse(text); // Attempt to parse as JSON
      let rate = data.conversion_rates[toCurr.value];

      if (!rate) {
        throw new Error("Invalid exchange rate data.");
      }

      let finalAmount = (amtVal * rate).toFixed(2);
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (err) {
      throw new Error("Invalid JSON response: " + err.message);
    }
  } catch (error) {
    msg.innerText = "Error fetching exchange rate. Please check your internet or try again later.";
    console.error("Fetch error:", error);
  }
};

// Update flag image based on selected currency
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

// Event listener for the button click
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

// Initial update of exchange rate when the page loads
window.addEventListener("load", () => {
  updateExchangeRate();
});
