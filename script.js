// Typing animation
class TypingAnimation {
    constructor(element, texts, speed = 80, pause = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.pause = pause;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.tick();
    }

    updateTexts(texts) {
        this.texts = texts;
    }

    tick() {
        const current = this.texts[this.textIndex % this.texts.length];
        
        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }

        this.element.textContent = current.substring(0, this.charIndex);

        let delay = this.isDeleting ? this.speed / 2 : this.speed;

        if (!this.isDeleting && this.charIndex === current.length) {
            delay = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex++;
            delay = 500;
        }

        setTimeout(() => this.tick(), delay);
    }
}

// Init typing
document.addEventListener('DOMContentLoaded', () => {
    const typingEl = document.getElementById('typing-text');
    if (typingEl) {
        const lang = localStorage.getItem('portfolio-lang') || 'en';
        const texts = (window.translations || {})[lang]?.typing || [
            'Full-Stack Laravel Developer',
            'Vue.js 3 Specialist',
            'API Architect',
            'Problem Solver'
        ];
        window.typingAnimation = new TypingAnimation(typingEl, texts);
    }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Nav background on scroll
const nav = document.querySelector('.main-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 15, 0.85)';
    }
});

// Mobile menu
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        navLinks.style.display = navLinks.classList.contains('mobile-open') ? 'flex' : '';
        if (navLinks.classList.contains('mobile-open')) {
            navLinks.style.position = 'fixed';
            navLinks.style.top = '60px';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'var(--bg-primary)';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '20px';
            navLinks.style.gap = '20px';
            navLinks.style.borderBottom = '1px solid var(--border)';
        } else {
            navLinks.removeAttribute('style');
        }
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .skill-category, .portfolio-card').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Contact form (placeholder handler)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '✓ Sent!';
        btn.style.background = '#34d399';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            form.reset();
        }, 2000);
    });
}

// Make translations available globally for typing animation
window.translations = window.translations || {};
// Will be populated by i18n.js
