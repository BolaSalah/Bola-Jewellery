let content = document.querySelector('.content');
let partOneCart = document.querySelector('.partOneCart');
let partTwoCart = document.querySelector('.partTwoCart');
let removeAll = document.querySelector('.removeAll');
let footer = document.querySelector('.footer');

if (localStorage.length == 0) {
    footer.classList.add("footer-no-product")
}

removeAll.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})

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
    partOneCart.innerHTML = `${(localStorage.length)>1?localStorage.length+" products":localStorage.length+" product"} - total ${getTotalPrice},000.00 `;