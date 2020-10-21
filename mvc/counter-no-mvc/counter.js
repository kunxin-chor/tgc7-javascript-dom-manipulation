document.querySelector("#increment").addEventListener('click', function(){
    let numberDisplayElement = document.querySelector("#number-display");
    let number = parseInt(numberDisplayElement.innerText);
     numberDisplayElement.innerText = number + 1;
     updateCounterColor();
})

document.querySelector("#decrement").addEventListener('click', function(){
    let numberDisplayElement = document.querySelector("#number-display");
    let number = parseInt(numberDisplayElement.innerText);
    numberDisplayElement.innerText = number -1 
    updateCounterColor();
})

function updateCounterColor() 
{   
     let numberDisplayElement = document.querySelector('#number-display');
        if (numberDisplayElement.innerText < 0) {
        numberDisplayElement.style.color = 'red';
    } else {
        numberDisplayElement.style.color = 'green';
    }
}

document.querySelector("#set-btn").addEventListener("click", function(){
    let wantedNumber = document.querySelector("#desired-number").value;
    document.querySelector("#number-display").innerText = wantedNumber;
    updateCounterColor();
}) 

