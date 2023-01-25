import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);
const cursor = new MouseFollower({
  container: document.body,
  speed: 1.3,
});

export default { cursor };
