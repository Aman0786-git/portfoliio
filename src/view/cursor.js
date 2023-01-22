import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower({
  container: document.body,
  speed: 0.9,
  //   scale: 10,
  //   overwrite: false,
});

// cursor.style.setX = 100;

// const el = document.querySelector(".nav_item");

// el.addEventListener("mouseenter", () => {
//   cursor.setSkewing(3);
// });
export default cursor;
