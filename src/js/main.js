(() => {
  // Clear inputs
  const clearButtons = document.querySelectorAll('.clear');
  const inputFields = document.querySelectorAll('.input__group-input');

  clearButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      inputFields.forEach(input => {
        input.value = '';
      })
    });
  });

  // Set sol and day
  const sol = document.querySelector('#sol');
  const day = document.querySelector('#day');
  sol.addEventListener('keyup', () => {
    day.value = (Number(sol.value) * 1.027491252).toFixed(2);
  });

  day.addEventListener('keyup', () => {
    sol.value = (Number(day.value) / 1.027491252).toFixed(2);
  });
})();