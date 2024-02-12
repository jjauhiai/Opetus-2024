const prompt = require('prompt-sync')();

function getSum() {
    //let num1 = parseFloat(prompt("Enter the first number:"));
    var s1 = prompt("Enter the first number:");
    var num1=parseFloat(s1);
    //let num2 = parseFloat(prompt("Enter the second number:"));
    var num2 = prompt("Enter the second number:");
    num2=parseFloat(num2);
    return num1 + num2;
}

console.log('Summa on ', getSum());