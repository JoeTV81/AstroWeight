// Write your JavaScript code here

var planets = [
  ["Sun", 27.9],
  ["Mercury", 0.377],
  ["Venus", 0.9032],
  ["Earth", 1],
  ["Moon", 0.1655],
  ["Mars", 0.3895],
  ["Jupiter", 2.64],
  ["Saturn", 1.139],
  ["Uranus", 0.917],
  ["Neptune", 1.148],
  ["Pluto", 0.059],
];

// initialize drop down menu
var select = document.getElementById("planetSelect");

for (var i = 0; i < planets.length; i++) {
  var plan = planets[i][0];
  var el = document.createElement("option");
  el.innerText = planets[i][0];
  el.value = planets[i][1];
  el.textContent = plan;
  select.appendChild(el);
}

//Button and Calculation function
document.getElementById('calculateWeight').onclick = function handleClickEvent(ev) {
  var userWeight = document.getElementById("userWeight").value;
  var choice = document.getElementById("planetSelect").selectedIndex;
  var gravity = document.getElementById("planetSelect")[choice].value;
  var planetName = document.getElementById("planetSelect")[choice].text;
  var finalWeight = Math.round(userWeight * gravity);
  document.getElementById("output").innerHTML = ("On " + planetName + " you weigh " + finalWeight + "lbs");
}
