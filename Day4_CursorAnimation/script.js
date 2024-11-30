let cursor = document.querySelector(".cursor");
let wrapper = document.querySelector(".wrapper");
let imgContainer = document.querySelector(".img-container");

wrapper.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "back.out",
  });
});

imgContainer.addEventListener("mouseenter", (dets) => {
  gsap.to(cursor, {
    scale: 1.5,
    ease: "back.out",
  });
});

imgContainer.addEventListener("mouseleave", (dets) => {
  gsap.to(cursor, {
    scale: 1,
    ease: "back.out",
  });
});
