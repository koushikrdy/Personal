document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('.nav-content a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animate project cards and skills on scroll
    const projectCards = document.querySelectorAll('.project-card');
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Staggered animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => observer.observe(card));
    skillItems.forEach(skill => observer.observe(skill));

    // Handle form submission
    const form = document.getElementById('contact-form');
    const formMessage = document.querySelector('.form-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.style.color = '#2ecc71';
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            formMessage.textContent = 'Error sending message. Try again later.';
            formMessage.style.color = '#e74c3c';
        }
    });
});