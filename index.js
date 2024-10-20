const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const authButtons = document.getElementById('authButtons');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
hamburger.addEventListener('click', () => {
    authButtons.classList.toggle('active');
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        const icon = button.querySelector('.icon');

        if (faqAnswer.style.display === 'block') {
            faqAnswer.style.display = 'none';
            icon.textContent = '+';
        } else {
            faqAnswer.style.display = 'block';
            icon.textContent = '−';
        }
    });
});

document.getElementById('resources').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});
