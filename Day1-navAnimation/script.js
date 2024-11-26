gsap.from("li", {
  duration: 2,
  dealay: 1,
  y: -100,
  stagger: 1,
  ease: "elastic.out(1, 0.3)",
});

// elastic.out(1, 0.3) is a type of easing function that creates a more bouncy effect. The first parameter (1) determines the strength of the bounce, and the second (0.3) determines the duration of the bounce.
