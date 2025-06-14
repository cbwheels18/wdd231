export function createModal() {
  const modal = document.createElement('div');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.classList.add('modal', 'hidden');
  modal.innerHTML = `
    <div class="modal-content" tabindex="-1">
      <button class="modal-close" aria-label="Close modal">&times;</button>
      <div id="modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.modal-close');
  const modalContent = modal.querySelector('.modal-content');
  const modalBody = modal.querySelector('#modal-body');

  closeBtn.addEventListener('click', () => closeModal());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.add('hidden');
    modalContent.blur();
    // Clean up old heading if it exists
    const oldHeading = modalBody.querySelector('#modal-title');
    if (oldHeading) oldHeading.remove();
  }

  function openModal(title, content) {
    modalBody.innerHTML = '';

    const heading = document.createElement('h2');
    heading.id = 'modal-title';
    heading.textContent = title;
    modalBody.appendChild(heading);

    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = content;
    modalBody.appendChild(contentDiv);

    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.classList.remove('hidden');
    modalContent.focus();
  }

  return { openModal, closeModal };
}
