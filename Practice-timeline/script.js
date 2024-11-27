let tl = gsap.timeline();

tl.from("nav .logo", {
  duration: 1,
  y: -100,
  ease: "elastic.out(1, 0.3)",
});

tl.from("nav ul li", {
  y: -100,
  stagger: 0.2,
  ease: "elastic.out(1, 0.3)",
});

tl.from(".hero-info h2", {
  x: -100,
  opacity: 0,
});

tl.from(".hero-info p", {
  x: -100,
  opacity: 0,
});

tl.from(".hero-info button", {
  scale: 0,
  opacity: 1,
});

tl.from(".hero-img img", {
  x: 200,
  opacity: 0,
});
