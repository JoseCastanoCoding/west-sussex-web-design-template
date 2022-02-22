/*
In this box you write your JavaScript. The most common way to test your code is to output a variable in an alert, as in this example.
*/
document.getElementById("messageButton").onclick = testCode;
function testCode() {
    var cities = ["Akron", "Brooklyn", "Canton"];
    alert("The number of cities in the array is " + cities.length);
    alert("The last city in the array is " + cities[cities.length - 1]);
}