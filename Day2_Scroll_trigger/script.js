gsap.to(".page2 h1", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top top",
    end: "top -100%",
    scrub: 1,
    pin: true,
    // markers: true,
  },
});
