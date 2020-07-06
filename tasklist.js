let addButton = document.getElementById('add-btn');
// addButton.addEventListener('click', function(){
//     let newTaskName = document.getElementById('new-task').value;
//     let parent = document.getElementById('tasklist');

//     // Step one: create the new element
//     let newTaskElement = document.createElement("li");


//     // Step two: set the inner text (i.e, the content of the new element)
//     newTaskElement.innerText = newTaskName;

//     let newButton = document.createElement("button");
//     newButton.innerText="Delete";
//     newTaskElement.appendChild(newButton);
//     newButton.addEventListener("click", function(){
//         alert("Deleting " + newTaskElement.innerText)
//     });

//     // Step three: add the new element into the parent
//     parent.appendChild(newTaskElement);

// })

addButton.addEventListener('click', function(){
    let newTaskName = document.getElementById('new-task').value;
    let parent = document.getElementById('tasklist');

    // Step one: create the new element
    let newTaskElement = document.createElement("li");

    // Step two: set the inner text (i.e, the content of the new element)
    newTaskElement.innerHTML = `
        <span>${newTaskName}</span>
        <button>Delete</button>
    `

    let deleteButton = newTaskElement.querySelector('button');
    deleteButton.addEventListener('click', function(){
        newTaskElement.remove();
    })
  

    // Step three: add the new element into the parent
    parent.appendChild(newTaskElement);

})