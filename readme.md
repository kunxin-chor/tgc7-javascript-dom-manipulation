# Running the server
```
python3 -m http.server
```

# Reading form fields

## Text fields

1. Select the element
```
let t = document.getElementById('product-name')
```

2. Access the `val` property of the element
```
let productName = t.value;
```

## Radio Buttons

**Note:** To ensure we can only select one radio button from the same group, make sure all the radio buttons in the same group
has the same `name` attribute.

We can set the default checked radio button by using the **checked** attribute:

```
<input type="radio" value="digital" checked/>
```

### Checking whether the radio button is selected:

1. Select the radio button
    ```
    let radios = document.getElementsByClassName('product-type')
    ```

    Alternatively, we can also use:

    ```
    let radios = document.getElementsByName('product-type')
    ```

2. Check if each of the radio button is selected

    We can access the `checked` property of each radio button element.

    ```
    console.log(radios[0].checked) // we see true if the first radio button is checked
    ```

3. So to extract out the value of the selected radio button
    ```
    // select all the radio buttons
    let radios = document.getElementsByClassName('product-type');

    // use a state variable to "save" the value of the selected radio button
    let selected = "";
    for (let r of radios) {
        if (r.checked) {
            selected = r.value;
            break;
        }
    }
    console.log("Selected product type=", selected);
    ```

## Dealing with `<options>` in `<select>`
A faster way to select all the <options> is to use the *parent child selector*

```
let allOptions = document.querySelectorAll("#payment-types option")
```

### Set the default selected option
We put the attribute `selected` inside the `<option>` if we want to select it by default.

```
<select>
    <option>First</option>
    <option selected>Second</option>
</select>
```

### Retrieve the value of the selected option
```
let paymentTypes = document.getElementById('payment-types');
let selected = paymentTypes.value;
console.log(selected);
```

## Checkboxes

### Check if a checkbox is checked
To know which checkbox is checked, select it and see if the `checked` property is true.

```
let checkboxes = document.getElementsByClassName("size");

if (checkboxes[0].checked) { 
    console.log("The first checkbox is checked");
}
```

### Retrieve all the checked checkboxes
```

// store all the checked checkboxes into an array
let selected=[];

let checkboxes = document.getElementsByClassName('size');
for (let c of checkboxes) {
    if (c.checked) {
        let value = c.value;
        selected.push(value);
    }
}
console.log(selected);
```

## Add Event Listeners
```
let btn = document.getELementById('process-btn');
btn.addEventListener('click', function(){
    ...
})
```

# Adding HTML elements dynamically to an existing HTML document

First thing: we must always **add into** an existing HTML element. If no parent, you can always just
choose the `<body>` element.

## Easier technique:  use `innerHTML`

1. Select the parent
    ```
    let p = document.getElementById('container');
    ```

2. Change the innerHTML of the parent
    ```
    p.innerHTML="<p>Hello World</p>";
    ```

### Another example: more complex HTML
This will replace **all** the elements that are already in the parent
```
p.innerHTML=`
    <h1>Welcome to my Dog's Photo Album</h1>
    <img src="images/dog.jpg"/>
`
```

## Appending using `innerHTML`
Note that we are adding to the back of the **existing** `innerHTML`
```
p.innerHTML = p.innerHTML + `<li>${randomNumber}</li>`
```

**NOTE:** Whenever we change the `innerHTML`, all the children elements within the parent
are **recreated**, so any event listeners attached to them
will be gone!!

## `createElement`

```
// STEP ONE: SELECT THE PARENT
let text = document.getElementById('textbox').value;
let p = document.getElementById("container3");

// STEP TWO: CREATE THE ELEMENT
// create the element
// createElement takes in one argument, which is the tag name of the HTML
// element that we want to create
let newElement = document.createElement("p");  // <p></p>

newElement.innerText="Hello World";

// STEP THREE: ADD THE NEW ELEMENT AS CHILD OF THE PARENT
p.appendChild(newElement);

```