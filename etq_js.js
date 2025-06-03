document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
    window.scrollTo({
top: target.offsetTop - 80,
behavior: 'smooth'
    });
}
    });
});


window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
header.style.padding = '10px 0';
header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
header.style.padding = '20px 0';
header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
    }
});

// formulaire //*
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    
    alert(`Merci ${name} ! Votre demande pour le service "${document.getElementById('service').options[document.getElementById('service').selectedIndex].text}" a été envoyée. Nous vous contacterons très rapidement pour confirmer votre rendez-vous.`);
    
    this.reset();
});


const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
if (entry.isIntersecting) {
    setTimeout(() => {
entry.target.style.opacity = 1;
entry.target.style.transform = 'translateY(0)';
    }, 150 * index);
}
    });
}, {
    threshold: 0.1
});

serviceCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});


//* menu //*
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.add('show');
    document.body.style.overflow = 'hidden';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
navLinks.classList.remove('show');
document.body.style.overflow = 'auto';
    });
});