import gsap from "gsap";

class bodyAnim {
  navEl = document.querySelector(".nav_item");
  headAnim() {
    const t1 = gsap.timeline({ defaults: { duration: 1 } });
    t1.fromTo("header", { y: "-80%" }, { y: "0%" });
  }

  hoverAnime() {
    this.navEl.addEventListener("mouseebter", (e) => {
      //   console.log(e);
    });
  }
}

export default new bodyAnim();
