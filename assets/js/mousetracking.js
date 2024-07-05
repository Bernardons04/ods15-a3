document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const front = card.querySelector('.front');
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    const rotateX = y * 20;
    const rotateY = x * 40;
    front.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateY(180deg)`;
  });

  card.addEventListener('mouseleave', () => {
    const front = card.querySelector('.front');
    front.style.transform = 'rotateY(180deg)';
  });
});
