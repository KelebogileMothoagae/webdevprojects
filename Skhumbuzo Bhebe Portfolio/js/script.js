const hamburger = document.querySelector(".hamburger");
const mbar = document.querySelector(".nav-links");

hamburger.addEventListener("click",mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
   mbar.classList.toggle("active");
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
console.log(entry)
if (entry.isIntersecting){
entry.target.classList.add('show');
}else{
    entry.target.classList.remove('show');
}
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e1)=>observer.observe(e1))