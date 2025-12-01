const loading = document.querySelector(".loading");

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 5000);
});

window.onscroll = function () {
  const btn = document.getElementById("go-top");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

document.getElementById("go-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const menu = document.querySelector(".menu-items");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".sajjad-nav");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-items-display");
  nav.classList.toggle("nav-after-menu");
});
