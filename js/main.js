/* --- js/main.js --- */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. SLIDER FUNCTIONALITY
    const slides = document.querySelectorAll('.slide');
    // Only run slider if slides exist (prevents errors on inner pages)
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 2000; // 2 seconds

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        setInterval(nextSlide, slideInterval);
    }

    // 2. HIGHLIGHT ACTIVE MENU LINK
    // Automatically highlights "Services" when on services.html
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Check if the href attribute matches the current path
        if (link.getAttribute('href') === currentPath || 
           (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active-link');
        }
    });
});
