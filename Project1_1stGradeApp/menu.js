// collect the elements
const menubtn = document.querySelector(".menubtn");
const menuIcon = document.querySelector(".menubtn span");
const collapsemenu = document.querySelector(".collapsemenu");

// add a click event to open the collapsible menu
menubtn.onclick = () => {
    collapsemenu.classList.toggle("closeToOpen");
    if (collapsemenu.classList.contains("closeToOpen")) {
        menuIcon.innerHTML = "<span>&times;</span>";
    } else {
        menuIcon.innerHTML = "<span>&#9776;</span>";
    }
};
