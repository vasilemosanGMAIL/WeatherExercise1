// Constant variables have const name
const kelvin = 293;
// Here we are converting the current constant Kelvin value to Celsius
let celsius = kelvin - 273;
// Here we are converting the Celsius value to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// The below  line of code rounds Fahrenheit variable output
fahrenheit = Math.floor(fahrenheit);
// The below  line of code
console.log(`The TEMPERATURE is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The TEMPERATURE is ${celsius} degrees Celsius.`);



function myFunction() {
    inputCeslsius = document.getElementById("number").value;
    document.getElementById("Afiseaza").innerHTML = inputCeslsius + " Grade Celsius";     
      }
      