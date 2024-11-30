# Cursor Animation with GSAP

This project showcases a custom cursor animation using **GSAP (GreenSock Animation Platform)**. The cursor dynamically follows the user's mouse movements and interacts with elements on the webpage by changing its size on hover.

---

## **What I Learned**

1. **Custom Cursor Implementation**:

   - How to create and style a custom cursor using HTML and CSS.
   - Synchronizing cursor movement with mouse events.

2. **GSAP Animations**:

   - Using the `gsap.to()` method for smooth transitions and animations.
   - Controlling animation properties like `x`, `y`, `scale`, `duration`, and easing functions (`back.out`).

3. **Mouse Events**:

   - Handling `mousemove`, `mouseenter`, and `mouseleave` events to trigger animations dynamically.

4. **Blend Modes**:
   - Leveraging `mix-blend-mode` for visually striking cursor effects.

---

## **Features**

- **Dynamic Cursor Movement**:

  - The cursor moves smoothly to follow the mouse pointer with GSAP animations.

- **Interactive Scaling**:

  - The cursor enlarges when hovering over the image container and reverts to its original size upon exit.

- **Modern UI Effects**:
  - A semi-transparent overlay with blend mode effects enhances the user interface aesthetics.

---

## **Technologies Used**

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling the custom cursor and layout.
- **GSAP (GreenSock Animation Platform)**: For animations and smooth transitions.
- **JavaScript**: For implementing event-based interactivity.

---

## **Code Snippets**

### **Cursor Movement Animation**

```javascript
wrapper.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "back.out",
  });
});
```

### ** Hover Effects**

```javascript
imgContainer.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    scale: 1.5,
    ease: "back.out",
  });
});

imgContainer.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
    ease: "back.out",
  });
});
```
