const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const opencart= document.querySelector(".cart-icon");
const cartmenu = document.querySelector(".shopping-menu");
const cartmenucont = document.querySelector(".cart-container");
var acc=document.getElementsByClassName("accordion");
var i;



for(i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var answer =this.nextElementSibling;
if(answer.style.display==="block"){
    answer.style.display="none";
}else{
    answer.style.display="block";
}
    })
}


function dropdown() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



hamburger.addEventListener("click",mobileMenu);
opencart.addEventListener("click",Cart);

function Cart(){
    opencart.classList.toggle("active");
    cartmenu.classList.toggle("active");
    cartmenucont.classList.toggle("active");
}
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

window.onscroll=() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

