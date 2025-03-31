const box = document.getElementById("box");

document.getElementById("show").addEventListener("click", () => {
    box.style.display = "block"; // Affiche la boîte avant l'animation
    gsap.fromTo(
        box,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
    );
});

document.getElementById("hide").addEventListener("click", () => {
    gsap.to(box, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
            gsap.set(box, { display: "none", y: 0 }); // Remet la position et cache
        }
    });
});


// Effet de rebond au hover
box.addEventListener("mouseenter", () => {
    gsap.to(box, { scale: 1.5, duration: 0.3, ease: "elastic.out(1, 0.3)" });
});

box.addEventListener("mouseleave", () => {
    gsap.to(box, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.3)" });
});
