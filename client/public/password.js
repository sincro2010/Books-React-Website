var password = document.querySelector('.password');
var showPassword = document.querySelector('.show-password');
var securityBar = document.querySelector('.security-bar');


showPassword.onchange = function () {
    if (showPassword.checked) {
    password.type = 'text';
    }
     else {
    password.type = 'password';
     }
};

password.oninput = function () {
    securityBar.style.width = password.value.length * 10 + '%';
    let passLength = password.value.length;
    console.log(securityBar.style.width);


    if (passLength <= 5) {
        securityBar.style.backgroundColor = 'red';
    } else if ( passLength > 5 && passLength <= 9) {
        securityBar.style.backgroundColor = 'orange';
    } else {
        securityBar.style.backgroundColor = 'green';
    }
};
