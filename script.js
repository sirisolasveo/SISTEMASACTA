document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const label = button.textContent.trim();
      button.animate(
        [
          { transform: 'scale(1)' },
          { transform: 'scale(0.98)' },
          { transform: 'scale(1)' }
        ],
        {
          duration: 220,
          easing: 'ease-out'
        }
      );

      if (label.includes('SOLICITAR') || label.includes('SEGUIMIENTO')) {
        button.style.boxShadow = '0 0 0 4px rgba(94, 166, 255, 0.18)';
        setTimeout(() => {
          button.style.boxShadow = '';
        }, 250);
      }
    });
  });
});
