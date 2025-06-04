// Animate cards on scroll
document.querySelectorAll('section').forEach(section => {
  section.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 800,
    fill: 'forwards',
    easing: 'ease-out'
  });
});
