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
