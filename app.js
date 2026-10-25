const feedback = document.querySelector('[data-feedback]');

for (const link of document.querySelectorAll('[data-download]')) {
  link.addEventListener('click', () => {
    if (!feedback) return;
    feedback.textContent = `Скачивание APK для ${link.dataset.download} началось`;
    feedback.classList.add('visible');
    window.setTimeout(() => feedback.classList.remove('visible'), 3600);
  });
}
