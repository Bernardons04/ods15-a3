document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const front = card.querySelector('.front');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    front.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) rotateY(180deg)`;
  });

  card.addEventListener('mouseleave', () => {
    const front = card.querySelector('.front');
    front.style.transform = 'rotateY(180deg)';
  });
});