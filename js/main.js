document.documentElement.classList.add('js');

// Nav: border on scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Breadcrumb: show the section currently in view
const pageLabel = document.getElementById('navPage');
const pages = document.querySelectorAll('[data-page]');
const pageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) pageLabel.textContent = entry.target.dataset.page;
  });
}, { rootMargin: '-45% 0px -50% 0px' });
pages.forEach((el) => pageObserver.observe(el));

// Reveal elements as they scroll into view
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
