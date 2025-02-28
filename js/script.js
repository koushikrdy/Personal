// Theme Toggle
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Particles.js for Hero
particlesJS('particles', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#00CED1' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#00CED1', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Skills Animation (using CSS for simplicity, could use Canvas for more realism)
document.querySelectorAll('.skill').forEach(skill => {
    const percent = skill.dataset.percent;
    skill.style.background = `conic-gradient(#00CED1 ${percent}%, #ddd ${percent}%)`;
    skill.style.borderRadius = '50%';
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;
        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact Form Submission with Confetti
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert('Message sent successfully!');
    e.target.reset();
});