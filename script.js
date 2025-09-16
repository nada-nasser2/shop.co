const dataCartNewArrivels = [
  {
    img: "assets/Frame 32 (1).png",
    name: "T-shirt With Tape Details",
    rate: "⭐⭐⭐⭐⭐",
    rateNambur: "4.5/5",
    price: "$120.00",
  },
  {
    img: "assets/Frame 33 (1).png",
    name: "Skinny Fit Jeans",
    rate: "⭐⭐⭐⭐⭐",
    rateNambur: "3.5/5",
    price: "$240.00",
  },
  {
    img: "assets/Frame 34 (1).png",
    name: "Checkered Shirt",
    rate: "⭐⭐⭐⭐⭐",
    rateNambur: "4.5/5",
    price: "$180.00",
  },
  {
    img: "assets/Frame 38 (1).png",
    name: "Sleeve Striped T-shirt",
    rate: "⭐⭐⭐⭐⭐",
    rateNambur: "4.5/5",
    price: "$130.00",
  },
];

const dataCartTopSeeling = [
  {
    img: "assets/Frame 32.png",
    name: "Vertical Striped Shirt",
    rate: "⭐⭐⭐⭐⭐",
    rateNambur: "5.0/5",
    price: "$212.00",
  },
  {
    img: "assets/Frame 33.png",
    name: "Courage Graphic T-shirt",
    rate: "⭐⭐⭐⭐⭐",
    rateNambur: "4.0/5",
    price: "$145.00",
  },
  {
    img: "assets/Frame 34.png",
    name: "Loose Fit Bermuda Shorts",
    rate: "⭐⭐⭐⭐⭐",
    rateNambur: "3.0/5",
    price: "$80.00",
  },
  {
    img: "./assets/Frame 38.png",
    name: "Faded Skinny Jeans",
    rate: "⭐⭐⭐⭐⭐",
    rateNambur: "4.5/5",
    price: "$210.00",
  },
];
const sideBar = document.querySelector(".sideBar");
const listDropDown = document.querySelector(".list-down");
const navBar = document.querySelector(".navBar");
const shopArrivels = document.querySelector(".shopArrivels");
const shopSeeling = document.querySelector(".shopSeeling");

document.querySelector(".iconBars").addEventListener("click", function () {
  if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
  } else {
    sideBar.style.display = "block";
  }
});

listDropDown.addEventListener("click", () => {
  listDropDown.classList.toggle("active");
});

function setTop() {
  sideBar.style.top = navBar.offsetHeight + "px";
}

window.addEventListener("resize", setTop);
setTop();

const shopCardNewArrivels = dataCartNewArrivels.map((card) => {
  return `
    <div class="shopCard">
      <img src="${card.img}" alt="" />
      <div class="container-details">
        <p>${card.name}</p>
        <div>
          <p>${card.rate}</p>
          <span>${card.rateNambur}</span>
        </div>
        <p>${card.price}</p>
      </div>
  </div>
  `;
});
shopArrivels.innerHTML = shopCardNewArrivels;

const shopCardTopSeeling = dataCartTopSeeling.map((card) => {
  return `
    <div class="shopCard">
      <img src="${card.img}" alt="" />
      <div class="container-details">
        <p>${card.name}</p>
        <div>
          <p>${card.rate}</p>
          <span>${card.rateNambur}</span>
        </div>
        <p>${card.price}</p>
      </div>
  </div>
  `;
});
shopSeeling.innerHTML = shopCardTopSeeling;
