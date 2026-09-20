

let buttons = document.querySelectorAll("button");
let display = document.querySelector("h1");

let firstOperand = "";
let operator = "";
let secondOperand = "";

// Calculation functions

function add(x, y) {
return x + y;
}

function subtract(x, y) {
return x - y;
}

function multiply(x, y) {
return x * y;
}

function divide(x, y) {
return x / y;
}

function percentage(x){
    return x/100;
}

// Perform the selected operation

function operate(operator, x, y) {


switch (operator) {

    case "+":
        return add(x, y);

    case "−":
        return subtract(x, y);

    case "×":
        return multiply(x, y);

    case "÷":
        return divide(x, y);
}


}

// Button clicks

buttons.forEach(button => {


button.addEventListener("click", () => {

    // Number buttons

    if (button.classList.contains("operand")) {

        if (operator === "") {
            firstOperand += button.textContent;
        } else {
            secondOperand += button.textContent;
        }

        display.textContent =
            firstOperand + operator + secondOperand;
    }


    // Operator buttons

    else if (button.classList.contains("operator")) {

       

        if (firstOperand !== "" && operator !== "" && secondOperand !== "") {

            let result = operate(
                operator,
                Number(firstOperand),
                Number(secondOperand)
            );

            firstOperand = result;
            secondOperand = "";
        }

        operator = button.textContent;

        display.textContent =
            firstOperand + operator;
    }


    // Equals button

    else if (button.classList.contains("equal-to")) {

        if (firstOperand !== "" && operator !== "" && secondOperand !== "") {

            let result = operate(
                operator,
                Number(firstOperand),
                Number(secondOperand)
            );

            firstOperand = result;
            operator = "";
            secondOperand = "";

            display.textContent = result;
        }
    }


    // Reset button

    else if (button.classList.contains("clear")) {

        firstOperand = "";
        operator = "";
        secondOperand = "";

        display.textContent = "0";
    }

});
})