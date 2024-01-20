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
                location.href ="../logIn/login.html"
            }
        })
    }
}