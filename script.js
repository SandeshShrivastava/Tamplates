var blur = document.querySelector("#cursor-blur");
var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 1,
  height: "90px",
  scrollTrigger: {
    teigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    teigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -30%",
    end: "top -100%",
    scrub: 2,
  },
});
gsap.to("#about-us", {
  backgroundColor: "#000",
  scrollTrigger: {
    teigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -30%",
    end: "top -100%",
    scrub: 2,
  },
});
