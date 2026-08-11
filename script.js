// ===========================
// MD AZRUDIN PORTFOLIO
// ===========================

console.log("Welcome to MD AZRUDIN Portfolio");

// Smooth animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Simple typing effect
const text = "Aspiring Full Stack Developer";
let index = 0;

function typingEffect() {
    const heading = document.querySelector(".left h2");

    if (!heading) return;

    heading.innerHTML = text.substring(0, index);

    if (index < text.length) {
        index++;
        setTimeout(typingEffect, 100);
    }
}

typingEffect();