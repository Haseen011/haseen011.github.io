// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after clicking a link (mobile)
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Publication filtering
const filterButtons = document.querySelectorAll('.pub-filter');
const pubItems = document.querySelectorAll('.pub-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    pubItems.forEach((item) => {
      const tags = item.dataset.tags || '';
      const show = filter === 'all' || tags.split(' ').includes(filter);
      item.classList.toggle('pub-hidden', !show);
    });
  });
});
