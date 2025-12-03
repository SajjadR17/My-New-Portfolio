import { NeatGradient } from "@firecms/neat";

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

const config = {
  colors: [
    { color: "#111C34", enabled: true },
    { color: "#0F1624", enabled: true },
    { color: "#1F2C3E", enabled: false },
    { color: "#0C2557", enabled: false },
    { color: "#1B253A", enabled: false },
  ],
  speed: 3,
  horizontalPressure: 4,
  verticalPressure: 4,
  waveFrequencyX: 3,
  waveFrequencyY: 4,
  waveAmplitude: 8,
  shadows: 2,
  highlights: 5,
  colorBrightness: 1,
  colorSaturation: 7,
  backgroundAlpha: 1,
  resolution: 1,
};

window.addEventListener("load", () => {
  const el = document.getElementById("gradient");
  if (!el) return;

  new NeatGradient({
    ref: el,
    ...config
  });
});