let menu = document.querySelector("nav i");
let close = document.querySelector(".nav-slider i");
let tl = gsap.timeline();

tl.from(".nav-slider", {
  x: "30%",
  opacity: 0,
  duration: 0.3,
});

tl.from(".nav-slider h4", {
  opacity: 0,
  x: "10%",
  duration: 0.2,
  stagger: 0.5,
  ease: "power2",
});

tl.from(close, {
  opacity: 0,
  scale: 0,
  y: -50,
  //   duration: 0.3,
  ease: "power3",
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
