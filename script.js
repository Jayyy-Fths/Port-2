// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        revealObserver.observe(section);
    });

    // Toggle Details for Projects
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            const details = project.querySelector('.details');
            details.classList.toggle('show');
        });
    });

    // Typing Effect for Welcome Text
    const welcomeText = "Welcome to My Portfolio!";
    let i = 0;
    const animatedTextElement = document.querySelector('.animated-text');

    if (animatedTextElement) {
        function typeText() {
            animatedTextElement.innerHTML = welcomeText.slice(0, i);
            i++;
            if (i <= welcomeText.length) {
                setTimeout(typeText, 100);
            }
        }
        typeText();
    }
});
