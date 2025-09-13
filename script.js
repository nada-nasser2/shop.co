const sideBar = document.querySelector(".sideBar");
document.querySelector(".iconBars").addEventListener("click", function () {
  if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
  } else {
    sideBar.style.display = "block";
  }
});
