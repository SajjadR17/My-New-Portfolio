const loading = document.querySelector(".loading");
const body = document.querySelector("body")

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 5000);
});

body.classList.add("no-scroll")

setInterval(() => {
  body.classList.remove("no-scroll")
}, 5000);

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