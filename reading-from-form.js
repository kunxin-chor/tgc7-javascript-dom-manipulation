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