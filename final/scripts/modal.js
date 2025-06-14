export function createModal() {
  const modal = document.createElement('div');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Lake details');
  modal.classList.add('modal', 'hidden');
  modal.innerHTML = `
    <div class="modal-content" tabindex="-1">
        <button class="modal-close" aria-label="Close modal">&times;</button>
        <h2 id="modal-title"></h2>
        <div id="modal-body"></div>
    </div>
    `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.modal-close');
  const modalContent = modal.querySelector('.modal-content');

  closeBtn.addEventListener('click', () => closeModal());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.add('hidden');
    modalContent.blur();
  }

    function openModal(title, content) {
    modal.querySelector('#modal-title').textContent = title;
    modal.querySelector('#modal-body').innerHTML = content;
    modal.classList.remove('hidden');
    modal.querySelector('.modal-content').focus();
    }
  return { openModal, closeModal };
}
