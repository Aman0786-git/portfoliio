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
window.addEventListener("scroll", () => {
  const { top } = containerEl.getBoundingClientRect();
  console.log(top);
  if (top <= -144) {
    // if (!headerEl.classList.contains("glass")) return;
    headerEl.classList.add("glass");
    // headerEl.classList.add("glass");
    // headerEl.classList.add("sticky");
  } else {
    headerEl.classList.remove("glass");
  }

  // if (top <= -239) {
  //   bodyAnim.aboutAnim();
  // }
});

window.onload();
