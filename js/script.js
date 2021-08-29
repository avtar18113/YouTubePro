var  menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");

menuIcon.onClick = function(){
    sideBar.classList.toggle(".small-sidebar");
}
