class Counter {
  number = 0;
  setNumber(newNumber) {
    this.number = parseInt(newNumber);
  }
  getNumber() {
    return this.number;
  }
  increment() {
    this.number += 1;
  }
  decrement() {
    this.number -= 1;
  }
}

class CounterController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.init(this);
  }

  increment() {
    this.model.increment();
    this.render();
  }

  decrement() {
    this.model.decrement();
    this.render();
  }

  setNumber(newNumber) {
    this.model.setNumber(newNumber);
    this.render();
  }

  render() {
      this.view.render({
          number: this.model.getNumber()
      })
  }
}

class CounterView {
  constructor(
    displayElement,
    incrementElement,
    decreaseElement,
    setButtonElement,
    setNumberElement
  ) {
    this.displayElement = displayElement;
    this.incrementElement = incrementElement;
    this.decreaseElement = decreaseElement;
    this.setButtonElement = setButtonElement;
    this.setNumberElement = setNumberElement;
  }

  init(controller) {
    view.incrementElement.addEventListener("click", () => {
      controller.increment();
    });

    view.decreaseElement.addEventListener("click", () => {
      controller.decrement();
    });

    view.setButtonElement.addEventListener("click", () => {
      let wantedNumber = this.setNumberElement.value;
      controller.setNumber(wantedNumber);
    });
  }

  render(viewModel) {
    this.displayElement.innerText = viewModel.number;
    if (viewModel.number < 0) {
      this.displayElement.style.color = "red";
    } else {
      this.displayElement.style.color = "green";
    }
  }
}

let counterModel = new Counter();

let numberDisplay = document.querySelector("#number-display");
let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");
let setBtn = document.querySelector("#set-btn");
let setNumberElement = document.querySelector("#desired-number");

let view = new CounterView(
  numberDisplay,
  incrementBtn,
  decrementBtn,
  setBtn,
  setNumberElement
);

let controller = new CounterController(counterModel, view);
