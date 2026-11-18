// Close the "more" menu on outside click or Escape.
(() => {
  const d = document.querySelector('details.more');
  if (!d) return;
  document.addEventListener('click', (e) => { if (d.open && !d.contains(e.target)) d.open = false; });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && d.open) { d.open = false; d.querySelector('summary').focus(); }
  });
})();
