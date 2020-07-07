function plus(a, b) {
    return a + b;
}

// We want to program the interaction first
// 1. Start by selecting the button
let calculateButton = document.querySelector("#calculate-btn");
calculateButton.addEventListener("click", function(){
    let number1 = parseFloat(document.querySelector("#number1").value); 
    let number2 = parseFloat(document.querySelector("#number2").value);

    let allRadioButtons = document.querySelectorAll('.operation');
    let selectedOperation = "";
    for (let r of allRadioButtons) {
        if (r.checked) {
            selectedOperation = r.value;

        }
    }

    let answer = 0;
    if (selectedOperation == "plus") {
        answer = plus(number1, number2);
    }
    if (selectedOperation =="minus") {
        answer = number1 - number2;
    }
    if (selectedOperation=="multiply") {
        answer = number1 * number2;
    }
    if (selectedOperation=="divide") {
        answer = number1 / number2;
    }

    let box = document.querySelector('#answer-box');
    box.innerHTML=`<h1>${answer}</h1>`;

})