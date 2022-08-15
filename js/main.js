"use strict";

const card = document.querySelector(".cards > .card ");
const changeImage = () => {
  const image = card.querySelector(".thumbnail img");
  if (window.innerWidth > 700) {
    image.src = "images/image-product-desktop.jpg";

    return;
  }

  image.src = "images/image-product-mobile.jpg";
};

document.addEventListener("resize", changeImage);
changeImage(); // to run when the page loads
