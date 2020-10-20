axios.get("data.json").then(function(response) {
  let fruits = response.data.fruits;
  let fruitElement = document.querySelector("#fruits");
  for (let f of fruits) {
    let listItemElement =  document.createElement('li');
    listItemElement.innerHTML = f;
    fruitElement.appendChild(listItemElement);
  }
});
