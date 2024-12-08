gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".wrapper", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".wrapper").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.to(".img-container img", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: ".img-container img",
    scroller: ".wrapper",
    start: "top 50%",
    end: "top -100%",
    scrub: 1,
    pin: true,
  },
});

gsap.from(".para-container p", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".para-container",
    scroller: ".wrapper",
    start: "top 80%",
    end: "top 40%",
    scrub: 3,
  },
});

let body = document.querySelector("body");
let navBar = document.querySelector("nav");

body.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    gsap.from(navBar, {
      opacity: 0,
    });
  } else {
    gsap.from(navBar, {
      opacity: 1,
      duration: 0.2,
      ease: "power1.in",
    });
  }
});
