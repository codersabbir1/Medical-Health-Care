// AOS Animations JS
AOS.init();
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};
// Get the navbar
var navbar = document.querySelector(".secondNav");
function myFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    navbar.style.top = "0px";
    navbar.style.position = "fixed";
  } else {
    navbar.style.top = "";
    navbar.style.position = "";
  }
}

// Menu js
const navBtn = document.querySelector(".menubarIcon");
const meanMenu = document.querySelector(".meanMenu");

window.onresize = () => {
  if (window.innerWidth > 899) {
    // meanMenu.style.display = "block"
    meanMenu.style.transform = "scaleY(1)";
    meanMenu.style.opacity = "1";
  } else {
    // meanMenu.style.display = "none"
    meanMenu.style.transform = "scaleY(0)";
    meanMenu.style.opacity = "0";
  }
};

navBtn.addEventListener("click", () => {
  if (meanMenu.style.opacity == 1) {
    // meanMenu.style.display = "none"
    meanMenu.style.transform = "scaleY(0)";
    meanMenu.style.opacity = "0";
  } else {
    // meanMenu.style.display = "block"
    meanMenu.style.transform = "scaleY(1)";
    meanMenu.style.opacity = "1";
  }
});

