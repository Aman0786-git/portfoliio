import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class bodyAnim {
  navEl = document.querySelector(".nav_item");
  headAnim() {
    const t1 = gsap.timeline({ defaults: { duration: 2 } });
    t1.fromTo(".header", { y: "-100%" }, { y: "0%", duration: 1.2 })
      .fromTo(
        ".nav_link",
        { opacity: 0 },
        {
          opacity: 1,
          ease: "power2.in",
          duration: 1,
        }
      )
      .fromTo(
        ".hi",
        {
          opacity: 0,
        },
        { opacity: 1, ease: "power2.in", duration: 1 }
      )
      .fromTo(
        ".name",
        {
          opacity: 0,
        },
        { opacity: 1, ease: "power2.in", duration: 1 }
      )
      .fromTo(
        ".maingl",
        {
          opacity: 0,
        },
        { opacity: 1, ease: "power2.in", duration: 1 }
      );
  }

  aboutAnim() {
    const t2 = gsap.timeline({ defaults: { duration: 1 } });
    // t2.fromTo(
    //   ".hi",
    //   {
    //     opacity: 0,
    //   },
    //   { opacity: 1, ease: "power2.in", duration: 1 }
    // )
    //   .fromTo(
    //     ".name",
    //     {
    //       opacity: 0,
    //     },
    //     { opacity: 1, ease: "power2.in", duration: 1 }
    //   )
    //   .fromTo(
    //     ".maingl",
    //     { opacity: 0 },
    //     { opacity: 1, ease: "back", duration: 0.5 }
    //   );
  }
}

export default new bodyAnim();
