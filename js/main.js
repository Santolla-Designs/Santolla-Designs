// Main JavaScript file for Santolla Designs website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const setupMobileMenu = () => {
        // Add mobile menu functionality when needed
        // This is a placeholder for future mobile menu implementation
    };

    // Form submission handling with validation
    const setupForms = () => {
        const contactForm = document.getElementById('contactForm');
        const newsletterForm = document.getElementById('newsletterForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                // Basic form validation
                const email = document.getElementById('email').value;
                const name = document.getElementById('name').value;
                const message = document.getElementById('message').value;
                
                if (!email || !name || !message) {
                    e.preventDefault();
                    alert('Please fill out all required fields');
                    return false;
                }
                
                // Success message after form submission
                // Note: This will only show momentarily before the form redirects
                // For a real implementation, you'd handle the form with AJAX
                alert('Thank you for your message! We will get back to you soon.');
            });
        }
        
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                const emailInput = newsletterForm.querySelector('input[type="email"]');
                if (!emailInput.value) {
                    e.preventDefault();
                    alert('Please enter your email address');
                    return false;
                }
                
                alert('Thank you for subscribing to our newsletter!');
            });
        }
    };

    // Smooth scrolling for navigation links
    const setupSmoothScrolling = () => {
        const navLinks = document.querySelectorAll('nav a[href^="#"], .hero-buttons a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Smooth scroll to element
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for header
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Add active class to current section in navigation
    const setupScrollSpy = () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        window.addEventListener('scroll', () => {
            let current = '';
            const scrollPosition = window.scrollY;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    };

    // Image loading optimization
    const setupLazyLoading = () => {
        // This is a placeholder for a future lazy loading implementation
        // For a production site, consider using the Intersection Observer API
    };

    // Fade-in animations on scroll
    const setupScrollAnimations = () => {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', fadeInOnScroll);
        // Initial check
        fadeInOnScroll();
    };

    // Initialize all functionality
    const init = () => {
        setupMobileMenu();
        setupForms();
        setupSmoothScrolling();
        setupScrollSpy();
        setupLazyLoading();
        setupScrollAnimations();
    };

    // Run initialization
    init();
});
