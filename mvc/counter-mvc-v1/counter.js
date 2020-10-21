
// MODEL:
let number = 0;

// CONTROLLER
function runController() {
    document.querySelector("#increment").addEventListener('click', function(){
        number += 1;
    })

    document.querySelector("#decrement").addEventListener('click', function(){
        number -= 1;
    })

    document.querySelector("#set-btn").addEventListener("click", function(){
        let wantedNumber = document.querySelector("#desired-number").value;
        number = parseInt(wantedNumber);  
    }) 

    document.querySelectorAll(".controls").forEach(c=>c.addEventListener('click', function(){
        render();
    }))
    
}

// VIEW
function render() {
    let numberDisplay = document.querySelector('#number-display');
    numberDisplay.innerText = number;
    if (number < 0) {
        numberDisplay.style.color = 'red';
    } else {
        numberDisplay.style.color = "green";
    }
}

// START
runController();


