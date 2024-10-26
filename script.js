// mix it up portfolio section //////////////////////////////////////////
var mixer = mixitup(".project-gallery");

// Active Menu //////////////////////////////////////////////////////////

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky Navbar //////////////////////////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Toggle Icon Navbar //////////////////////////////////////////////////////////
let menuIcons = document.querySelector("#menu-icons");
let navlist = document.querySelector(".navlist");

menuIcons.onclick = () => {
  menuIcons.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menuIcons.classList.remove("bx-x");
  navlist.classList.remove("open");
};
