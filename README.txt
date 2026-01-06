AuraVolt multi-page site (generated)
===================================

Structure:
  - index.html        Home
  - services.html     Services + process
  - about.html        Vision, Mission, Our Team
  - contact.html      Quote intake form (expanded fields)
  - partials/         Reusable header/footer/opensolar
  - assets/           styles + site JS (includes + header scroll)

How it works:
  - Each page loads partials via fetch(). For local testing, use a simple local server.
    Examples:
      python -m http.server 8000
      npx serve

Notes:
  - The OpenSolar scripts were moved into partials/opensolar.html.
  - Replace logo.png with your actual logo and ensure it's in the same folder as the HTML files.
