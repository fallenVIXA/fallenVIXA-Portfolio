function animateOnScroll() {
    const items = document.querySelectorAll('.timeline-item');
    
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            item.classList.add('visible');
        }
    });
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('click', function(e) {
      
    });
});

// Theme toggle
const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === "light"
        ? "dark"
        : "light";
  });

// Custom cursor
const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("active"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Update mouse position on move
document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth cursor animation
function animate() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animate);
}
animate();

// Particle effect on mouse move
let lastTime = 0;

  document.addEventListener("mousemove", e => {
    const now = Date.now();
    if (now - lastTime < 20) return;
    lastTime = now;

    const particle = document.createElement("div");
    particle.className = "particle";

    const dx = (Math.random() - 0.5) * 30;
    const dy = (Math.random() - 0.5) * 30;

    particle.style.left = e.clientX + "px";
    particle.style.top = e.clientY + "px";
    particle.style.setProperty("--dx", dx);
    particle.style.setProperty("--dy", dy);

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 900);
  });

