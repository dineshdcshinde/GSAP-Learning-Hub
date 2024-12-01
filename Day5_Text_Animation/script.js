let h1 = document.querySelector("h1");
let textValue = h1.textContent;

let letters = textValue.split("");

// Clear the existing content if u don't do this it will harm
h1.innerHTML = "";

letters.forEach((e, idx) => {
  let halfValue = Math.floor(letters.length / 2);
  if (idx < halfValue) {
    h1.innerHTML += `<span class="left">${e}</span>`;
  } else {
    h1.innerHTML += `<span class="right">${e}</span>`;
  }
});

gsap.from("h1 .left", {
  y: 50,
  opacity: 0,
  stagger: 0.2 + Math.random() * 0.5, // Randomized stagger
  delay: 0.5,
  duration: 0.6,
  ease: "power3.out",
});

gsap.from("h1 .right", {
  x: 100,
  rotation: 20, // Add rotation effect
  opacity: 0,
  stagger: 0.2 + Math.random() * 0.5,
  delay: 1,
  duration: 0.7,
  ease: "elastic.out(1, 0.3)",
});

// Hover Effect for Each Character
document.querySelectorAll("h1 span").forEach((span) => {
  span.addEventListener("mouseover", () => {
    gsap.to(span, {
      scale: 1.5,
      color: "#FFD700",
      duration: 0.3,
    });
  });

  span.addEventListener("mouseout", () => {
    gsap.to(span, {
      scale: 1,
      color: "#fff",
      duration: 0.3,
    });
  });
});
