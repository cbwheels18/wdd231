document.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.getElementById("timestamp");
  if (timestamp) {
    timestamp.value = new Date().toISOString();
  }

  document.querySelectorAll("dialog").forEach(dialog => {
    dialog.addEventListener("cancel", e => e.preventDefault());

    const originalShowModal = dialog.showModal;
    dialog.showModal = function () {
      const x = window.scrollX;
      const y = window.scrollY;
      originalShowModal.call(dialog);
      setTimeout(() => window.scrollTo(x, y), 0);
    };
  });
});
