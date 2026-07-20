document.addEventListener("DOMContentLoaded", () => {

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetNode = document.querySelector(targetId);

            if (targetNode) {
                targetNode.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for Fade-in Animations on Scroll
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the show class to animate
                entry.target.classList.add('show');

                // Stop observing once animated to keep it visible
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the 'fade-in' class
    document.querySelectorAll('.fade-in').forEach(el => {
        scrollObserver.observe(el);
    });

    // Real Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const submitBtn = e.target.querySelector('button');

            // Visual feedback of sending
            submitBtn.innerText = 'Sending...';
            submitBtn.style.opacity = '0.8';
        });

        window.addEventListener('formSubmitted', () => {
            const submitBtn = contactForm.querySelector('button');
            const originalText = "Send Message";

            submitBtn.innerText = 'Message Sent Successfully!';
            submitBtn.style.background = 'linear-gradient(90deg, #00c853, #1de9b6)';
            submitBtn.style.color = '#fff';
            submitBtn.style.opacity = '1';

            // Reset form fields
            contactForm.reset();

            // Revert button back to normal after a few seconds
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.style.background = ''; // Reverts to css original
            }, 3000);

            // reset submitted flag
            submitted = false;
        });
    }

});
