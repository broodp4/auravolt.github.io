/* ============================================================
   AuraVolt – Main JavaScript
   ============================================================ */

'use strict';

// ─── NAV: Hamburger menu toggle ───────────────────────────────
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) navLinks.classList.toggle('open');
}

// Close menu when a link is clicked (mobile)
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#navLinks a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // ─── NAV: Sticky shadow on scroll ─────────────────────────
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 4px 30px rgba(0,0,0,0.4)'
        : 'none';
    }
  });

  // ─── NAV: Highlight active page link ──────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── SCROLL REVEAL ────────────────────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => revealObserver.observe(el));

  // ─── HERO: Animated solar panels ──────────────────────────
  const panelCells = document.querySelectorAll('.panel-cell');
  if (panelCells.length) {
    setInterval(() => {
      const randomCell = panelCells[Math.floor(Math.random() * panelCells.length)];
      randomCell.classList.toggle('lit');
    }, 800);
  }

  // ─── COUNTER ANIMATION (Why Us stats) ────────────────────
  const counters = document.querySelectorAll('[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  // ─── CONTACT FORM: Client-side validation ─────────────────
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  // ─── QUOTE FORM (CTA section) ─────────────────────────────
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', handleQuoteSubmit);
  }
});

// ─── COUNTER ANIMATION ────────────────────────────────────────
function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(ease * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ─── FORM HANDLERS ────────────────────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('#name')?.value.trim();
  const email = form.querySelector('#email')?.value.trim();
  const message = form.querySelector('#message')?.value.trim();

  if (!name || !email || !message) {
    showFormMessage(form, 'Please fill in all required fields.', 'error');
    return;
  }
  if (!isValidEmail(email)) {
    showFormMessage(form, 'Please enter a valid email address.', 'error');
    return;
  }

  // Simulate submission (replace with real endpoint / Formspree / Netlify Forms)
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    showFormMessage(form, '✓ Message sent! We\'ll be in touch within one business day.', 'success');
    form.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;
  }, 1200);
}

function handleQuoteSubmit(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (!input || !isValidEmail(input.value.trim())) {
    input.style.borderColor = '#e55';
    setTimeout(() => input.style.borderColor = '', 2000);
    return;
  }
  const btn = e.target.querySelector('button, a.btn-primary');
  const originalText = btn.textContent;
  btn.textContent = '✓ We\'ll be in touch!';
  btn.style.background = 'var(--green)';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    input.value = '';
  }, 3000);
}

function showFormMessage(form, message, type) {
  let msg = form.querySelector('.form-message');
  if (!msg) {
    msg = document.createElement('p');
    msg.className = 'form-message';
    form.appendChild(msg);
  }
  msg.textContent = message;
  msg.style.cssText = `
    margin-top: 12px;
    font-size: 14px;
    color: ${type === 'success' ? 'var(--green)' : '#ff6b6b'};
    font-weight: 500;
  `;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
