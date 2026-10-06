// Highlight the current page's link in the main nav.
document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
});

// Homepage hero: hovering a link cross-fades the right-hand photo to
// that section's image.
document.addEventListener('DOMContentLoaded', () => {
  const linkList = document.getElementById('heroLinks');
  const photoStack = document.getElementById('heroPhotoRight');
  if (!linkList || !photoStack) return;

  const layers = photoStack.querySelectorAll('.hero-photo-layer');
  const links = linkList.querySelectorAll('a[data-panel]');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const target = link.getAttribute('data-panel');
      layers.forEach(layer => {
        layer.classList.toggle('is-visible', layer.getAttribute('data-panel') === target);
      });
    });
  });

  linkList.addEventListener('mouseleave', () => {
    layers.forEach(layer => layer.classList.remove('is-visible'));
  });
});

// Navigation: hamburger toggle opens a dropdown panel (same behavior at
// every screen width) with a dimmed backdrop. Closes on backdrop click,
// link click, or Escape.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  const backdrop = document.getElementById('navBackdrop');
  if (!toggle || !nav || !backdrop) return;

  const openNav = () => {
    nav.classList.add('is-open');
    backdrop.classList.add('is-visible');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    nav.classList.remove('is-open');
    backdrop.classList.remove('is-visible');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('is-open');
    isOpen ? closeNav() : openNav();
  });

  backdrop.addEventListener('click', closeNav);
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
});

// Subtle scroll-reveal for content blocks.
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
});

// Photo album: clicking a tile opens a full-size preview lightbox with
// keyboard/click navigation between images.
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.photo-grid');
  const lightbox = document.getElementById('lightbox');
  if (!grid || !lightbox) return;

  const tiles = Array.from(grid.querySelectorAll('.photo-tile'));
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  let index = 0;

  const show = (i) => {
    index = (i + tiles.length) % tiles.length;
    const tile = tiles[index];
    img.src = tile.currentSrc || tile.src;
    img.alt = tile.alt || '';
    counter.textContent = (index + 1) + ' / ' + tiles.length;
  };

  const open = (i) => {
    show(i);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  tiles.forEach((tile, i) => tile.addEventListener('click', () => open(i)));
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => show(index - 1));
  nextBtn.addEventListener('click', () => show(index + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
});
