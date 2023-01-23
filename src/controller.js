import cursor from "./view/cursor.js";
import bodyAnim from "./view/headerView.js";
import * as Anim3d from "./view/main3d.js";
// import { showContent } from "./view/loading.js";

// showContent();
bodyAnim.headAnim();
bodyAnim.aboutAnim();
Anim3d.loop();

// loadTime();
// setTimeout(loadTime(), 1000);
// loadTime();
// window.addEventListener("load", fadeEffect());
