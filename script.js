class Calculator {
  constructor() {
    this.currentValue = "";
    this.displayElement = document.querySelector(".display");
  }

  clear() {
    this.currentValue = "";
  }

  appendNumber(number) {
    this.currentValue += number.toString();
  }

  chooseOperation(operation) {
    this.currentValue += ` ${operation} `;
  }

  compute() {
    try {
      this.currentValue = eval(this.currentValue).toString();
    } catch (error) {
      this.currentValue = "Error";
    }
  }

  updateDisplay() {
    this.displayElement.textContent = this.currentValue;
  }
}

const calculator = new Calculator();

function handleInput(input) {
  if (!isNaN(input) || input === ".") {
    calculator.appendNumber(input); 
  } else if (["+", "-", "*", "/","%"].includes(input)) {
    calculator.chooseOperation(input);
  } else if (input === "=") {
    calculator.compute();
  } else if (input === "C") {
    calculator.clear();
  }

  calculator.updateDisplay();
}


// const inputs = ["1", "+", "1", "*", "1", "-", "1", "/", "1", "="];
// inputs.forEach((input) => handleInput(input));
