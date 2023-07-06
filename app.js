const menubar=document.querySelector(".menu_bar");
const dropDown=document.querySelector(".dropdown");
menubar.onclick=function(){
    dropDown.classList.toggle("open");
}