let path = "M 10 80 Q 95 80 880 80";
let finalPath = "M 10 80 Q 95 80 880 80";
let cursor = document.querySelector(".cursor");
let svg = document.querySelector("svg");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.x + 20}px`;
  cursor.style.top = `${e.y + 20}px`;
});

svg.addEventListener("mousemove", (e) => {
  path = `M 10 80 Q ${e.x} ${e.y} 880 80`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "elastic.out(1, 0.3)",
  });
});

svg.addEventListener("mouseleave", (e) => {
  path = `M 10 80 Q 95 80 880 80`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "elastic.out(1, 0.3)",
  });
});
