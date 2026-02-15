const current = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(link => {
  if (link.getAttribute('href') === current) link.classList.add('active');
});

document.querySelectorAll('.product-card').forEach(card => {
  const slides = card.querySelectorAll('.slide');
  if (!slides.length) return;
  let index = 0;
  const counter = card.querySelector('.counter');
  const update = () => {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    if (counter) counter.textContent = `${index + 1}/${slides.length}`;
  };
  card.querySelector('[data-prev]')?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });
  card.querySelector('[data-next]')?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });
  update();
});
