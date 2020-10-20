let form = document.querySelector("#my-form");

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let hasAccepted = document.querySelector('#accept').checked;

    // assume not gulity unless otherwise
    let userNameTooShort = false;
    let emailNotValid = false;
    let passwordTooShort = false;

    let username = document.querySelector('#username').value;
    if (username.length <= 3) {
        userNameTooShort = true;
    }

    let password = document.querySelector("#password").value;
    if (password.length <= 3) {
        passwordTooShort = true;
    }

    let email = document.querySelector("#email").value;
    if (email.length <= 3) {
        emailNotValid = true;
    }

    let errors = document.querySelector('#errors');
    errors.innerHTML = "";
    
    if (!hasAccepted) {
        errors.innerHTML += "<li>Please accept the terms and conditions</li>"
    }

    if (userNameTooShort) {
        errors.innerHTML += "<li>User name is too short</li>";
    }

    if (passwordTooShort) {
        errors.innerHTML += "<li>Password is too short</li>";
    }

    if (emailNotValid) {
        errors.innerHTML += "<li>Email is too short</li>";
    }
})