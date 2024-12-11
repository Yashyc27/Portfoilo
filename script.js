// Animation and Interaction Script for Retro Portfolio

// Smooth scroll for navigation (if added in future versions)
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const startTime = null;

    function animation(currentTime) {
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Fade-in animations on scroll
const faders = document.querySelectorAll('.timeline-event, .project-item, .skill-item, .certifications li');

const options = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Header glow effect on hover
document.querySelectorAll('.retro-header h1, .retro-header .tagline').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.textShadow = "0 0 10px #00ffcc, 0 0 20px #ff6699";
    });
    element.addEventListener('mouseout', () => {
        element.style.textShadow = "none";
    });
});

// Contact link hover effect
document.querySelectorAll('.contact-info a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#ff6699";
    });
    link.addEventListener('mouseout', () => {
        link.style.color = "#00ffcc";
    });
});
