// Tiny "component include" + header scroll behavior for plain HTML sites.
async function includePartials() {
  const nodes = document.querySelectorAll('[data-include]');
  await Promise.all(Array.from(nodes).map(async (node) => {
    const path = node.getAttribute('data-include');
    const res = await fetch(path, { cache: 'no-cache' });
    if (!res.ok) {
      node.innerHTML = `<div class="text-red-600">Failed to load ${path}</div>`;
      return;
    }
    node.innerHTML = await res.text();
  }));
}


function setActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach((a) => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.classList.add('is-active');
  });
}

function wireMobileMenu() {
  const btn = document.querySelector('.site-menu-btn');
  const nav = document.querySelector('#site-nav');
  if (!btn || !nav) return;

  const close = () => {
    nav.style.display = 'none';
    btn.setAttribute('aria-expanded', 'false');
  };

  const open = () => {
    nav.style.display = 'flex';
    btn.setAttribute('aria-expanded', 'true');
  };

  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    expanded ? close() : open();
  });

  nav.addEventListener('click', (e) => {
    if (e.target && e.target.matches('a')) close();
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) close();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) nav.style.display = 'flex';
    else close();
  });

  if (window.innerWidth > 900) nav.style.display = 'flex';
  else close();
}

function wireHeaderShadow() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

document.addEventListener('DOMContentLoaded', async () => {
  // If your site uses partial injection, keep this:
  if (typeof includePartials === 'function') {
    await includePartials();
  }

  setActiveNav();
  wireMobileMenu();
  wireHeaderShadow();
});

