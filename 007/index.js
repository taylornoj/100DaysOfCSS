const searchBtn=document.querySelector(".search-button");
const search=document.querySelector(".search-input")
const menuBtn=document.querySelector(".menu-button");
const menu=document.querySelector(".side-menu");
const center=document.querySelector(".center");

searchBtn.addEventListener("click",()=>{
    search.classList.toggle("search-show")
});

menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("menu-show");
    center.classList.toggle("center-aside");
});