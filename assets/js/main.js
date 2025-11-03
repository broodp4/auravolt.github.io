
function toggleMenu(){
  const nav = document.getElementById('site-nav');
  const open = nav.classList.toggle('open');
  const btn = document.querySelector('.menu-toggle');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if(y){ y.textContent = new Date().getFullYear(); }
  const qf = document.getElementById('quoteForm');
  if(qf){
    qf.addEventListener('submit', (e) => {
      // Basic honeypot check
      const hp = qf.querySelector('input[name="company"]');
      if(hp && hp.value.trim() !== ''){
        e.preventDefault();
        alert('Spam detected.');
      }
    });
  }
});
