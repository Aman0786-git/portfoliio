import cursor from "./view/cursor.js";
import bodyAnim from "./view/headerView.js";
import * as Anim3d from "./view/main3d.js";
// import { showContent } from "./view/loading.js";

// showContent();
bodyAnim.headAnim();
Anim3d.loop();

// loadTime();
// setTimeout(loadTime(), 1000);
// loadTime();
// window.addEventListener("load", fadeEffect());
const containerEl = document.querySelector(".container");
const headerEl = document.querySelector(".header");
const glassEl = document.querySelector(".glass");
const menuEl = document.querySelector(".nav_menu");
const menuConatiner = document.querySelector(".menu_container");
window.addEventListener("scroll", () => {
  const { top } = containerEl.getBoundingClientRect();
  // console.log(top);
  if (top <= -144) {
    headerEl.classList.add("glass");
  } else {
    headerEl.classList.remove("glass");
  }

  // if (top <= -239) {
  //   bodyAnim.aboutAnim();
  // }
});

// Menu Container
menuEl.addEventListener("click", (e) => {
  menuConatiner.classList.toggle("hidden");
  const closeEl = e.target.closest("span");
  closeEl.textContent = closeEl.textContent != "close" ? "close" : "menu";
  console.log(closeEl.textContent);
  if (closeEl.textContent === "close") {
    bodyAnim.menuAnim();
  }
});
