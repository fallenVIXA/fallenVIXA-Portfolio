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
