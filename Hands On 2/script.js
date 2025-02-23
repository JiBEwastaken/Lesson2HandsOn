function addNumbers(a, b) { 
    return a + b; 
  }
  
  // ask for numbers
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  
  // calculate the sum
  let sum = addNumbers(num1, num2);
  
  // display the sum in an alert
  alert("The sum is: " + sum);
  