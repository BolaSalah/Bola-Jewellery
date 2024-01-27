let mobile = document.querySelector('.mobile');
let nameSign = document.querySelector('.name');
let password = document.querySelector('.password');
let btn = document.querySelector('.signUpInp');
let err = document.querySelector('.err');

btn.addEventListener('click', function (e) {
    console.log(nameSign.value.length);
    if (mobile.value.length === 11 && nameSign.value.length>2 && password.value.length>=6 ) {
        localStorage.setItem('mobile', mobile.value);
        localStorage.setItem('name', nameSign.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('login', 'true');
        location.href = '../../home/index.html';
    }
    else {
        err.innerHTML = "error";
        err.style.color = "red";
    }
});
