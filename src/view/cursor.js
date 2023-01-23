import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower();
//   {
//   container: document.body,
//   speed: 1.4,
// }

export default { cursor };
