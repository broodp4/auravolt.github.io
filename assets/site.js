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

function wireHeaderScroll() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const onScroll = () => {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('bg-white', scrolled);
    header.classList.toggle('shadow-lg', scrolled);
    header.classList.toggle('bg-transparent', !scrolled);
    header.classList.toggle('text-white', !scrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function setActiveNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.classList.add('text-yellow-400');
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await includePartials();
  setActiveNav();
  wireHeaderScroll();
});
