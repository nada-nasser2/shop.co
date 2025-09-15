const sideBar = document.querySelector(".sideBar");
const listDropDown =document.querySelector('.list-down');
const navBar = document.querySelector(".navBar");

document.querySelector(".iconBars").addEventListener("click", function () {
  if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
  } else {
    sideBar.style.display = "block";
  }
});


listDropDown.addEventListener( 'click' , ()=>{
  listDropDown.classList.toggle('active')
})


function setTop() {
  sideBar.style.top = navBar.offsetHeight + "px";
}

window.addEventListener("resize", setTop);
setTop();
