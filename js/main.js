// Nav background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Scroll-reveal for sections
const revealEls = document.querySelectorAll(
  '.project-card, .skills__group, .timeline__item, .stat'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// Stagger reveal for grouped items
const staggerGroups = [
  document.querySelectorAll('.project-card'),
  document.querySelectorAll('.timeline__item'),
  document.querySelectorAll('.stat'),
];
staggerGroups.forEach(group => {
  group.forEach((el, i) => {
    el.style.transitionDelay = `${i * 90}ms`;
  });
});
