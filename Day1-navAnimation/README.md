# GSAP Navigation Animation Project

This project is a simple demonstration of animating a navigation bar using **GSAP (GreenSock Animation Platform)**. It features smooth entry animations for navigation items with a springy elastic effect.

---

## Project Overview

### Features:

- A clean and responsive navigation bar design.
- Smooth staggered animations for navigation items.
- Implementation of **GSAP** for creative animations.

### Technologies Used:

- **HTML**: To structure the webpage.
- **CSS**: For styling and layout.
- **GSAP**: For animations.

---

## GSAP Animations Used

1. **`gsap.from()`**:

   - Used to animate elements from an initial state.
   - In this case, the list items (`<li>`) move from off-screen (`y: -100`) into their final position.

2. **`stagger`**:

   - Allows a delay between the animation of each navigation item for a cascading effect.

3. **`ease`**:

   - Used the `"elastic.out(1, 0.3)"` ease for a bouncy spring-like motion.

4. **`duration`** and **`delay`**:
   - Controlled the animation timing.

---

### Example Code:

#### JavaScript Animation:

```javascript
gsap.from("li", {
  duration: 2,
  delay: 1,
  y: -100,
  stagger: 1,
  ease: "elastic.out(1, 0.3)",
});
```
