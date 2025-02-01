document.querySelectorAll('.slot').forEach(slot => {
    slot.addEventListener('click', () => {
      const title = slot.querySelector('.title');
      title.classList.toggle('permanent');
    });
  });
  