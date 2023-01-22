import gsap from "gsap";

class bodyAnim {
  navEl = document.querySelector(".nav_item");
  headAnim() {
    const t1 = gsap.timeline({ defaults: { duration: 1.5 } });
    t1.fromTo("header", { y: "-100%" }, { y: "0%" });
  }

  scrollStick() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction();
    };

    // Get the header
    const header = document.querySelector(".header");

    // Get the offset position of the navbar
    const sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
}

export default new bodyAnim();
