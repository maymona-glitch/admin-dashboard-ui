document.getElementById('mode-switch').addEventListener('change', function () {
  document.documentElement.classList.toggle('dark');

  const modeLabel = document.getElementById('mode-label');
  if (document.documentElement.classList.contains('dark')) {
    modeLabel.textContent = 'Dark mode';
  } else {
    modeLabel.textContent = 'Light mode';
  }
});

