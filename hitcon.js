document.addEventListener('DOMContentLoaded', (event) => {
  const slots = document.querySelectorAll('.slot');
  const spinButton = document.getElementById('spin-button');

  function getRandomSymbol() {
    const symbols = ['🍒', '🍋', '🍉', '🍇', '7️⃣', '💖', '👨‍👧‍👧'];
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function spinSlots() {
    slots.forEach(slot => {
      slot.textContent = getRandomSymbol();
    });
  }

  spinButton.addEventListener('click', spinSlots);
});
