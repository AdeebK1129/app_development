/* SHAPE */
// collect the elements
const shape = document.querySelector(".shapeDiv");
const shapePara = document.querySelector(".shapeDiv p");
const btnSquare = document.querySelector(".btnSquare");
const btnRectangle = document.querySelector(".btnRectangle");
const btnCircle = document.querySelector(".btnCircle");

btnSquare.onclick = () => {
    shapePara.textContent = "SQUARE";
    shape.className = "shapeDiv square";
}

btnRectangle.onclick = () => {
    shapePara.textContent = "RECTANGLE";
    shape.className = "shapeDiv rectangle";
    
}

btnCircle.onclick = () => {
    shapePara.textContent = "CIRCLE";
    shape.className = "shapeDiv circle";
}

/* DROPDOWN MENU */
// collect the elements
const menubtn = document.querySelector(".menubtn");
const menuIcon = document.querySelector(".menubtn span");
const collapsemenu = document.querySelector(".collapsemenu");

// add a click event to open the collapsible menu

menubtn.onclick = () => {
  collapsemenu.classList.toggle("closeToOpen");
  if(collapsemenu.classList.contains("closeToOpen")){
    menuIcon.innerHTML = "<span>&times;</span>"
  }
  else{
    menuIcon.innerHTML = "<span>&#9776;</span>"
  }
}


/* MODAL WINDOW */
// collect the elements
const card = document.querySelector(".card");
const modalWindow = document.querySelector(".modalWindow");
const closemodal = document.querySelector(".closemodal");

// add a click event to open the modal window
card.onclick = () => {
    modalWindow.style.display = "block";
}

// close the modal window by clicking on x
closemodal.onclick = () => {
    modalWindow.style.display = "none";
}

// close the modal window when the user clicks anywhere outside the modal
window.addEventListener("click", (event) => {
    if(event.target == modalWindow){
        modalWindow.style.display = "none";
    }
})
