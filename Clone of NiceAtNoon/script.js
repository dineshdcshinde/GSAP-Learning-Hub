gsap.to(".img-container img", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: ".img-container img",
    start: "top 50%",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});


gsap.from(".para-container p",{
    y: 100,
    opacity: 0,
    stagger:0.3,
    scrollTrigger: {
      trigger: ".para-container",
      start: "top 80%",
      end: "top 40%",
      scrub: 3,
    },
})
