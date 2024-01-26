let nameInp = document.querySelector('.name');
let password = document.querySelector('.password');
let inp = document.querySelector('.logInInp');
let haveAcoount = document.querySelector('.haveAcoount');

inp.addEventListener('click', function (e) {
    e.preventDefault();
    if (
    nameInp.value === localStorage.getItem('name') &&
    password.value === localStorage.getItem('password')) {
    localStorage.setItem('login', 'true');
    location.href = '../home/index.html';
    }
    else {
        if (nameInp.value.length === 0 || password.value.length === 0) {
            haveAcoount.innerHTML = "you should to write name and password";
            haveAcoount.style.color = 'red';
        }
        else {
            haveAcoount.innerHTML = 'your name or password is incorrect';
            haveAcoount.style.color = 'red';
        }
    }
});
