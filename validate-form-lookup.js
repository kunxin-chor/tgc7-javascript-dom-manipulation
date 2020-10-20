let form = document.querySelector("#my-form");

let errorMessages = {
    'en' : {
        'username_too_short' : "Your user name is too short",
        'email_not_valid' : "Your email is not valid",
        'password_too_short' : "Your password is too short",
        'not_accepted': "Please accept the terms and conditions"
    },
    'jp' : {
        'username_too_short' : "ユーザー名が短すぎます",
        'email_not_valid' : "あなたのメールアドレスは無効です",
        'password_too_short' : "パスワードが短すぎます",
        'not_accepted': "利用規約に同意してください"
    }
}

let lang = 'jp';

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
        errors.innerHTML += `<li>${errorMessages[lang]['not_accepted']}</li>`
    }

    if (userNameTooShort) {
        errors.innerHTML += `<li>${errorMessages[lang]['username_too_short']}</li>`;
    }

    if (passwordTooShort) {
        errors.innerHTML += `<li>${errorMessages[lang]['password_too_short']}</li>`;
    }

    if (emailNotValid) {
        errors.innerHTML += `<li>${errorMessages[lang]['email_not_valid']}</li>`;
    }
})