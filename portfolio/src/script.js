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


window.addEventListener("load", () => {
  VANTA.NET({
    el: "#vanta-bg",
    color: 0x5dc7ff,         
    backgroundColor: 0x0f1624, 

    points: 7.0,   
    maxDistance: 15.0,
    spacing: 32.0,    
    showDots: true,    


    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });
});