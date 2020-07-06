let loadButton = document.getElementById('load-btn');

loadButton.addEventListener('click', function(){
    // 1. Select the parent that we want to add into
    let p = document.getElementById('container');

    // 2. Add into the parent using the innerHTML
    p.innerHTML=`
        <h1>Welcome to my Dog's Photo Album</h1>
        <img src="images/dog.jpg"/>
    `
})

let addRandomButton = document.getElementById('add-number-btn');
addRandomButton.addEventListener('click', function(){
    // generate a random number between 1 to 100000
   let randomNumber = Math.floor(Math.random() * 10000 + 1);

   // 1. select the container that we want add into
   let p = document.getElementById('numbers');

   // 2. Append in the new random number
   p.innerHTML = p.innerHTML + `<li>${randomNumber}</li>`

})

let addTextButton = document.getElementById("add-text-btn");
addTextButton.addEventListener('click', function(){

    // STEP ONE: SELECT THE PARENT
    let text = document.getElementById('textbox').value;
 
    let p = document.getElementById("container3");


    // STEP TWO: CREATE THE ELEMENT
    // create the element
    // createElement takes in one argument, which is the tag name of the HTML
    // element that we want to create
    let newElement = document.createElement("p");  // <p></p>

    // change the innerText of the new element to be the same value as
    // whatever the user has typed in
    newElement.innerText = text;

    newElement.addEventListener("click", function(){
        alert(newElement.innerText)
    })

    // STEP THREE: ADD THE NEW ELEMENT AS CHILD OF THE PARENT
    p.appendChild(newElement);
})