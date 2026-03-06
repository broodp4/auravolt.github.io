/* ============================================================
   AuraVolt – Shared Nav + Footer
   All pages are at root level so all hrefs are simple filenames.
   ============================================================ */

const NAV_HTML = `
<div class="topbar">
  <a href="tel:6046198009">☀ AuraVolt &nbsp;|&nbsp; (604) 619-8009</a>
  <div class="topbar-socials">
    <a href="#" aria-label="Facebook">Facebook</a>
    <a href="#" aria-label="LinkedIn">LinkedIn</a>
    <a href="#" aria-label="Instagram">Instagram</a>
    <a href="#" aria-label="YouTube">YouTube</a>
  </div>
</div>
<nav>
  <a href="index.html" class="logo">
    <img src="logo.png" alt="AuraVolt" class="logo-img" />
  </a>
  <button class="hamburger" onclick="toggleMenu()" aria-label="Toggle menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="pricing.html">Pricing</a></li>
    <li><a href="contact.html" class="nav-cta">Get a Quote</a></li>
  </ul>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">
        <img src="logo.png" alt="AuraVolt" class="footer-logo-img" />
      </div>
      <p>BC's trusted solar installation experts. We handle design, permits, installation, and long-term support — all with our certified in-house team.</p>
      <a href="tel:6046198009" class="footer-phone">☀ (604) 619-8009</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="about.html#team">Our Team</a></li>
        <li><a href="about.html#testimonials">Testimonials</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Services</h4>
      <ul>
        <li><a href="services.html#residential">Residential Solar</a></li>
        <li><a href="services.html#commercial">Commercial Solar</a></li>
        <li><a href="services.html#ev">EV Charging</a></li>
        <li><a href="services.html#battery">Battery Storage</a></li>
        <li><a href="services.html#offgrid">Off-Grid Systems</a></li>
        <li><a href="services.html#maintenance">Maintenance</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="contact.html">Get a Quote</a></li>
        <li><a href="about.html#rebates">BC Hydro Rebates</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} AuraVolt. All rights reserved.</span>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Sitemap</a>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (main) {
    main.insertAdjacentHTML('beforebegin', NAV_HTML);
  }

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML;
  }

  // Highlight active nav link
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentFile) {
      link.classList.add('active');
    }
  });
});
