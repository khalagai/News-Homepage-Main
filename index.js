const openMenu = document.getElementById("menuIcon");
const closeMenu = document.getElementById("close-icon");
const readMore = document.getElementById("read");
const showList = document.getElementById("theList");

const displayMenu = () => showList.style.display = "flex";
const hideMenu = () => showList.style.display = "none";  
    
function NewTab() {
    window.open("https://www.revelo.com/blog/what-is-web-3-0", "_blank");
}

openMenu.addEventListener("click", displayMenu);
closeMenu.addEventListener("click", hideMenu);
readMore.addEventListener("click", NewTab);