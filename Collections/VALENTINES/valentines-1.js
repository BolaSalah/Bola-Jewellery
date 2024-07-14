// get data from json
let containerCards = document.querySelector('.container-cards');
let req = new XMLHttpRequest();
req.open("GET", "./valentines-Data.json");
req.send();
req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let datajs = JSON.parse(this.responseText)
        for (let i = 0; i < 12; i++) {
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
                    addToCart[i].innerHTML="done, added"
                    setTimeout(function () {
                        addToCart[i].innerHTML = "ADD TO CART";
                    }, 1000)
                    let cartFun = function cart() {
                        let cartImage = datajs[i].image;
                        let cartPrice = datajs[i].price.split("&")[0];
                        return (cartImage + "-" + cartPrice);
                    };
                    localStorage.setItem(`cart-valentine-${i}`, [cartFun()]);
            })
        }
    }
};