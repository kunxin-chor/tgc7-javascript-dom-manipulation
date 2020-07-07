/*
Create a BMI Calculator that asks the user for his weight and height via two text input.
There is also a radio button to ask if the users want to enter in imperial units (pounds for weight and feet for height), or in metric (kg for weight and metres for height).

Calculate the BMI depending on which option (imperial or metric) the unit has selected. You can use the alert function to show the BMI:

// pop up an alert box which has the content 'hi there'
alert('hi there')
*/

// this is the function which we want to activate in response to the button being clicked
function calculateBMI(){
    // extract weight from the weight textbox
    let weight = document.querySelector("#weight").value;
    // extract height from the height textbox
    let height = document.querySelector("#height").value;
    // convert weight from string to float
    weight = parseFloat(weight);
    // convert height from string to float
    height = parseFloat(height);

    let radioButtons = document.querySelectorAll(".units");
    let checked = ""; // state variable to store which has been selected- metric or imperial
    for (let r of radioButtons) {
        if (r.checked) {
            checked = r.value;
            break;
        }
    }
    let bmi = 0;

    if (checked == "metric") {
        // calculate the bmi (assuming weight is in kg, and height is in metres)
        bmi = weight/ (height * height);
    } else if (checked == "imperial") {
        // assuming weight is in pounds and height is in inches
        bmi = weight * 703 / (height * height);
    }

   // show the bmi to the user
    alert(bmi);
}

let button = document.querySelector("#calculate-btn");
button.addEventListener('click', calculateBMI);