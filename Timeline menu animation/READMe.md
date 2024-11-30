# GSAP Timeline Menu Animation

This project demonstrates the use of **GSAP (GreenSock Animation Platform)** to create a sliding navigation menu with smooth animations. The project includes an interactive menu that opens and closes with animated effects.

---

## **What I Learned**

1. **GSAP Basics**:

   - How to use `gsap.timeline()` to create a sequence of animations.
   - Utilizing timeline methods like `play()`, `reverse()`, and `pause()` for interactive control.

2. **Animation Properties**:

   - Using properties like `duration`, `opacity`, `x`, `y`, `scale`, and `stagger` to design animations.
   - Applying easing functions (e.g., `power2.inOut`) for smoother transitions.

3. **Event Listeners**:

   - Adding interactivity to HTML elements using `addEventListener` for `click` events.

4. **CSS Enhancements**:
   - Incorporating hover and click effects for better user interaction.
   - Using `backdrop-filter` for a modern glass effect.

---

## **Features**

- **Sliding Navigation Menu**:

  - Opens smoothly from the side when clicking the menu icon.
  - Closes with a reverse animation when clicking the close icon.

- **Interactive Animations**:
  - Menu items appear sequentially with staggered animations.
  - Subtle effects on the close button for hover and click interactions.

---

## **Technologies Used**

- **HTML5**: For the structure of the webpage.
- **CSS3**: For styling, hover effects, and responsive design.
- **GSAP (GreenSock Animation Platform)**: For animations.
- **JavaScript**: For implementing interactivity.

---

## **How It Works**

1. **Menu Icon**:

   - Clicking the menu icon triggers the `play()` method of the GSAP timeline, sliding the menu into view.

2. **Close Icon**:

   - Clicking the close icon triggers the `reverse()` method, sliding the menu out of view.

3. **Smooth Animations**:
   - Timeline animations are chained to create a seamless flow, including staggered menu item appearances.

---

## **Code Snippets**

### **Timeline Animation Setup**

```javascript
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
  ease: "power3",
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reverse();
});
```
