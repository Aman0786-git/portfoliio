import gsap from "gsap";

class bodyAnim {
  navEl = document.querySelector(".nav_item");
  headAnim() {
    const t1 = gsap.timeline({ defaults: {} });
    t1.fromTo(".header", { y: "-100%" }, { y: "0%", duration: 1.2 });
    t1.fromTo(
      ".nav_link",
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power2.in",
      }
    );
  }
}

export default new bodyAnim();
