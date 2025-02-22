// Scroll Reveal Animation
const sections = document.querySelectorAll('.scroll-reveal');

const revealOptions = {
    threshold: 0.3
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

sections.forEach(section => {
    revealObserver.observe(section);
});

// Toggle Details for Projects
function toggleDetails(project) {
    const details = project.querySelector('.details');
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Typing Effect for Welcome Text
const welcomeText = "Welcome to My Portfolio!";
let i = 0;
const animatedTextElement = document.querySelector('.animated-text');
const cursorElement = document.querySelector('.cursor');

function typeText() {
    if (i < welcomeText.length) {
        animatedTextElement.textContent += welcomeText.charAt(i);
        i++;
        setTimeout(typeText, 150);  // Continue typing after 100ms
    } else {
        cursorElement.style.animation = 'none';  // Stop the cursor blinking animation
        cursorElement.style.display = 'none';    // Hide the cursor once typing is complete
    }
}

window.onload = function () {
    typeText();  // Start the typing effect when the page loads
};
