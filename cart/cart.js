// change login button in navBar
let logIn = document.querySelector(".logInNavbar");
window.onload = function () {
    if(localStorage.getItem("login") === "true"){
        logIn.innerHTML = "Log out";
        logIn.addEventListener("click",function(e){
            e.preventDefault();
            if(logIn.innerHTML==="Log out"){
                localStorage.removeItem("login");
                logIn.innerHTML="Log in";
            }
            else if (logIn.innerHTML==="Log in"){
                location.href ="../../logIn/login.html"
            }
        })
    }
};

let content = document.querySelector('.content');
let partOneCart = document.querySelector('.partOneCart');
let partTwoCart = document.querySelector('.partTwoCart');

if (localStorage.getItem("login") === "true") {
    let getTotalPrice = 0;
    for (let i = 0; i < 27; i++) {
        if (localStorage.getItem(`cart-valentine-${i}`)) {
            let getItem= localStorage.getItem(`cart-valentine-${i}`);
            let getImage = `../Collections/VALENTINES/` + getItem.split('-')[0].slice(2);
            let getPrice = getItem.split('-')[1];
            partTwoCart.innerHTML += `<div class="card">
            <img src =${getImage}>
            <p class="price">${getPrice}</p>
            </div> `;
            getTotalPrice = getTotalPrice + parseInt(getItem.split('-')[1]);
        }
        if (localStorage.getItem(`cart-amorFati-${i}`)) {
            let getItem= localStorage.getItem(`cart-amorFati-${i}`);
            let getImage = `../Collections/AMOR-FATI/` + getItem.split('-')[0].slice(2);
            let getPrice = getItem.split('-')[1];
            partTwoCart.innerHTML += `<div class="card">
            <img src =${getImage}>
            <p class="price">${getPrice}</p>
            </div> `;
            getTotalPrice = getTotalPrice + parseInt(getItem.split('-')[1]);
        }
        if (localStorage.getItem(`cart-bracelet-${i}`)) {
            let getItem= localStorage.getItem(`cart-bracelet-${i}`);
            let getImage = `../Jewellery/BRACELETS/` + getItem.split('-')[0].slice(2);
            let getPrice = getItem.split('-')[1];
            partTwoCart.innerHTML += `<div class="card">
            <img src =${getImage}>
            <p class="price">${getPrice}</p>
            </div> `;
            getTotalPrice = getTotalPrice + parseInt(getItem.split('-')[1]);
        }
        if (localStorage.getItem(`cart-ring-${i}`)) {
            let getItem= localStorage.getItem(`cart-ring-${i}`);
            let getImage = `../Jewellery/RINGS/` + getItem.split('-')[0].slice(2);
            let getPrice = getItem.split('-')[1];
            partTwoCart.innerHTML += `<div class="card">
            <img src =${getImage}>
            <p class="price">${getPrice}</p>
            </div> `;
            getTotalPrice = getTotalPrice + parseInt(getItem.split('-')[1]);
        }
        else {
            continue;
        }
    }
    partOneCart.innerHTML = `Hi Mr ${localStorage.getItem('name')} - you buy ${localStorage.length-4} product - total ${getTotalPrice},000.00 `;
}
else {
    partOneCart.innerHTML = "you should to log in"
    let footer = document.querySelector(".footer");
    footer.style.position = "absolute";
    footer.style.bottom = '0px';
    footer.style.width = '100%';
}