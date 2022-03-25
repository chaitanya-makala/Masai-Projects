document.querySelector("#btn1").addEventListener("click" , function(){
    window.location.href = "../pages/signin.html";
    
});
document.querySelector("#btn2").addEventListener("click" , function(){
    window.location.href = "../pages/login.html";
});


function startSelling(){
    window.open(
        "signin.html",
        "_self"
    )
}