const unitMap = {
  celsius: {
    fahrenheit: (value) => (value * 9) / 5 + 32,
    kelvin: (value) => value + 273.15,
    rankine: (value) => ((value + 273.15) * 9) / 5,
    reaumur: (value) => (value * 4) / 5,
    newton: (value) => (value * 33) / 100,
    delisle: (value) => ((100 - value) * 3) / 2,
  },
  fahrenheit: {
    celsius: (value) => ((value - 32) * 5) / 9,
    kelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
    rankine: (value) => value + 459.67,
    reaumur: (value) => ((value - 32) * 4) / 9,
    newton: (value) => ((value - 32) * 11) / 60,
    delisle: (value) => ((212 - value) * 5) / 6,
  },
  kelvin: {
    celsius: (value) => value - 273.15,
    fahrenheit: (value) => ((value - 273.15) * 9) / 5 + 32,
    rankine: (value) => (value * 9) / 5,
    reaumur: (value) => ((value - 273.15) * 4) / 5,
    newton: (value) => ((value - 273.15) * 33) / 100,
    delisle: (value) => ((373.15 - value) * 3) / 2,
  },
  rankine: {
    celsius: (value) => ((value - 491.67) * 5) / 9,
    fahrenheit: (value) => value - 459.67,
    kelvin: (value) => (value * 5) / 9,
    reaumur: (value) => ((value - 491.67) * 4) / 9,
    newton: (value) => ((value - 491.67) * 11) / 60,
    delisle: (value) => ((671.67 - value) * 5) / 6,
  },
  reaumur: {
    celsius: (value) => (value * 5) / 4,
    fahrenheit: (value) => (value * 9) / 4 + 32,
    kelvin: (value) => (value * 5) / 4 + 273.15,
    rankine: (value) => (value * 9) / 4 + 491.67,
    newton: (value) => (value * 33) / 80,
    delisle: (value) => ((80 - value) * 15) / 8,
  },
  newton: {
    celsius: (value) => (value * 100) / 33,
    fahrenheit: (value) => (value * 60) / 11 + 32,
    kelvin: (value) => (value * 100) / 33 + 273.15,
    rankine: (value) => (value * 60) / 11 + 491.67,
    reaumur: (value) => (value * 80) / 33,
    delisle: (value) => ((33 - value) * 50) / 11,
  },
  delisle: {
    celsius: (value) => 100 - (value * 2) / 3,
    fahrenheit: (value) => 212 - (value * 6) / 5,
    kelvin: (value) => 373.15 - (value * 2) / 3,
    rankine: (value) => 671.67 - (value * 6) / 5,
    reaumur: (value) => 80 - (value * 8) / 15,
    newton: (value) => 33 - (value * 11) / 50,
  },
};

const convertTemperature = () => {
  const fromValue = parseFloat(document.getElementById("fromValue").value);
  const fromUnit = document.getElementById("fromUnit").value;

  const toUnit = document.getElementById("toUnit").value;
  if (fromUnit === toUnit) {
  }

  // Validate input units
  if (!unitMap[fromUnit] || !unitMap[fromUnit][toUnit]) {
    alert("Invalid conversion. Please select valid units.");
    return;
  }

  // Perform temperature conversion using the mapping
  const result = unitMap[fromUnit][toUnit](fromValue);

  // Display the converted value in the "To" input field
  document.getElementById("toValue").value = result.toFixed(2);
};

const resetValues = () => {
  // Clear input fields
  document.getElementById("fromValue").value = "";
  document.getElementById("toValue").value = "";

  // Set "To" field back to readonly
  document.getElementById("toValue").readOnly = true;
};

const facts = [
  "The normal temperature of a human body is 36.5–37.5°C. At this temperature, bodies are able to function normally.",
  "A lightning bolt is 27,727°C.",
  "The core of the Sun can reach 15 million degrees Celsius!",
  "Earth's core is 5,377°C.",
  "100°C is the boiling point of water.",
  "The highest recorded temperature on Earth was in Death Valley, United States where it reached 56.7°C in 1913.",
  "-15°C is the melting point of ice cream.",
  "Liquid hydrogen is the coldest substance known to man at -400°C.",
  "Antarctica is the coldest place on Earth, with the lowest recorded temperature at -94.7°C.",
  "The highest recorded temperature in the United Kingdom is 38.5°C.",
  "In universe temperatures range from about 3,500,000,000 Kelvin (a supernova) to 3 Kelvin (space).",
  "In universe temperatures range from about 3,500,000,000 Kelvin (a supernova) to 3 Kelvin (space).",
  "−89.2 °C (−128.6 °F) is the coldest temperature ever recorded on Earth. It was recorded at Vostok Station located in Antarctica on July 21, 1983.",
];

function displayRandomFact() {
  const factElement = document.getElementById("fact");
  const randomIndex = Math.floor(Math.random() * facts.length);
  factElement.textContent = facts[randomIndex];
}

// Display a random fact when the page loads
window.addEventListener("load", displayRandomFact);
