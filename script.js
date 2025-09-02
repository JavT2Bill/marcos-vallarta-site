// Año dinámico en footer
document.getElementById('y')?.appendChild(document.createTextNode(new Date().getFullYear()));

// Lightbox / Modal
const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('lightboxImg');
const modalCap = document.getElementById('lightboxCap');
const closeBtn = document.getElementById('closeModal');

// Apertura al clic de cualquier imagen de galería
document.querySelectorAll('.gallery .item img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt || '';
    modalCap.textContent = img.dataset.caption || img.alt || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

// Cerrar modal
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}
closeBtn?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
  if(e.target === modal) closeModal();
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
