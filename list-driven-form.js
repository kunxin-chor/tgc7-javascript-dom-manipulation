let productTypes = [
    {
        type: 'digital',
        display_name: "Digital"
    },
    {
        type: 'physical',
        display_name: 'Physical'
    },
    {
        type: 'service',
        display_name: "Online service"
    }
]

let productTypeDiv = document.querySelector('#product_types');
// for (let p of productTypes) {
//     // console.log(p);
//     let divElement = document.createElement('div');
//     let radioButtonElement = document.createElement('input');
//     radioButtonElement.type = "radio";
//     radioButtonElement.value = p.type;
//     radioButtonElement.name = 'products';
//     radioButtonElement.className = 'product-type';

//     let spanElement = document.createElement('span');
//     spanElement.innerText = p.display_name;

//     divElement.appendChild(radioButtonElement);
//     divElement.appendChild(spanElement);

//     productTypeDiv.appendChild(divElement);
// }

for (let p of productTypes) {
    let spanElement = document.createElement("span");
    spanElement.innerHTML = `<input type="radio"
                              name="product-type" 
                              class="product-type"
                              value="${p.type}"/>  
                              <span>${p.display_name}</span>`;
    productTypeDiv.appendChild(spanElement);
}

let btn = document.getElementById('process-btn');
btn.addEventListener('click', function(){
    
    // extract out the product name
    let t = document.getElementById('product-name');
    let productName = t.value;

    // extract out the value of the checked radio button
    let radios = document.getElementsByClassName('product-type');
    let selectedProductType = "";
    for (let r of radios) {
        if (r.checked) {
            selectedProductType = r.value;
            break;
        }
    }

    // extract out the selected payment type
    let paymentTypes = document.getElementById('payment-types');
    let selectedPayment = paymentTypes.value;

    // extract out the values of all the  checkboxes which are checked
    let selectedSizes=[];

    let checkboxes = document.getElementsByClassName('size');
    for (let c of checkboxes) {
        if (c.checked) {
            let value = c.value;
            selectedSizes.push(value);
        }
    }

    // formatted string literal
    let results = `
        Product Name: ${productName}
        Product Type: ${selectedProductType}
        Payment Type: ${selectedPayment}
        Sizes:
    `;
    for (let s of selectedSizes) {
        results = results + s + " "
    }

    alert(results);

})