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
}

// get data from json
let containerCards = document.querySelector('.container-cards');
let req = new XMLHttpRequest();
req.open('GET', './rings-Data.json');
req.send();
req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    let datajs = JSON.parse(this.responseText);
    for (let i = 12; i < datajs.length; i++) {
        containerCards.innerHTML += `<div class="card" id=${datajs[i].id}>
                <img src=${datajs[i].image} alt="VALENTINES-image-${i}">
                <p class="description mt-2 ms-2">${datajs[i].description}</p>
                    <p class="price">${datajs[i].price}</p>
                <div class="hidden-link">
                    <a class="addToCart">ADD TO CART</a>
                </div>
                </div> `;
        }
         // (add to cart) button
        let addToCart = document.querySelectorAll('.addToCart');
        let card =document.querySelectorAll(".card")
        for (let i = 0; i < addToCart.length; i++) {
            addToCart[i].addEventListener("click", function () {
                if (localStorage.getItem("login") === "true") {
                    addToCart[i].innerHTML="done, added"
                    setTimeout(function () {
                        addToCart[i].innerHTML = "ADD TO CART";
                    }, 1000)
                    let cartFun = function cart() {
                        let cartImage = datajs[i+12].image;
                        let cartPrice = datajs[i+12].price.split("&")[0];
                        return (cartImage + "-" + cartPrice);
                    };
                    localStorage.setItem(`cart-ring-${i + 12}`, [cartFun()]);
                }
                else {
                    let one = document.createElement("div");
                    one.classList.add("one")
                    one.innerHTML = 'you should to log in';
                    card[i].appendChild(one);
                    setTimeout(function () {
                        one.remove();
                    }, 3000);
                }
            })
        }
    }
};
