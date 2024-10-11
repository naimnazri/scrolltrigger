gsap.registerPlugin(ScrollTrigger);

gsap.to(".c", {
    ScrollTrigger: ".c",
    x: 400,
    rotation: 360,
    duration: 3
})