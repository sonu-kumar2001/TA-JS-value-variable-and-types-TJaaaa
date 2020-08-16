// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = +prompt("Enter any number");
if(number%2===0) {
  alert("number is even");
} else {
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let firstNumber = +prompt("Enter first number");
let secondNumber = +prompt("Enter second number");
if(firstNumber>secondNumber) {
  alert(`${firstNumber} is the max value`);
} else {
  alert(`${secondNumber} is the max value`);
}

// 3. Convert the above code using`?` terniary operator
firstNumber>secondNumber ? alert(`${firstNumber} is the max value`)
:
alert(`${secondNumber} is the max value`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter your house name");
if(houseName==="stark") {
  alert("Winter is coming");
} else if(houseName==="lannister") {
  alert("A lannister always pays his debt");
}else {
  alert("All men must die");
}
// 5. Convert the above code using`?` terniary operator
houseName==="stark" ? alert("Winter is coming") :
houseName==="lannister" ? alert("A lannister always pays his debt") :
alert("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber= +prompt("Enter any month number");
switch(monthNumber) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("The number of days in this month are 31");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("The number of days in this month are 30");
    break;
  case 2:
    alert("The number of days in this month are 28");
    break;
  default:
    alert("There is only 12 months in a year")
}
/* 7.
- Write a program that take the salary of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amount from salary.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salaryAmount = +prompt("Enter your salary amount");
if(salaryAmount <= 20000) {
  alert(`Your hand amount is ${salaryAmount-(salaryAmount*10/100)}`);
} else if(salaryAmount <= 40000) {
  alert(`Your hand amount is  ${salaryAmount-(salaryAmount*20/100)}`);
} else {
  alert(`Your hand amount is  ${salaryAmount-(salaryAmount*30/100)}`);
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = +prompt("Enter your marks");
if(marks > 100) {
  alert("Marks can't be greater than 100");
} else if(marks > 80 && marks < 100) {
  alert("Grade A");
} else if(marks > 50 && marks < 80) {
  alert("Grade B");
} else if(marks > 30 && marks < 50) {
  alert("Grade C");
} else {
  alert("Grade D");
}

switch(marks) {
  case marks > 100:
    alert("Marks can't be greater than 100");
  case marks > 80 && marks < 100:
    alert("Grade A");
  case marks > 50 && marks < 80:
    alert("Grade B");
  case marks > 30 && marks < 50:
    alert("Grade C");
  default :
    alert("Grade D");
}
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weatherOutside = prompt(`What is the weather like outside?`);
if (weatherOutside === "sunny") {
  alert("Wear a T-shirt");
} else if (weatherOutside === "rainy") {
  alert("Don't forget to take your raincoat");
} else if (weatherOutside === "hot") {
  alert("Get a hanky"); 
} else if (weatherOutside === "freezing") {
  alert("Get your sweeter on");
} else {
  alert("Not a valid input");
}