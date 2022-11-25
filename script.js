let headerBtn = document.querySelector(".burger");
let headerMenu = document.querySelector(".nav-menu-mobile");

headerBtn.addEventListener("click", function(){
    if (headerMenu.classList.contains("menu-visible")){
        headerMenu.classList.remove("menu-visible");
    } else {
        headerMenu.classList.add("menu-visible");
    }
});