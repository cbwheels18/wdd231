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

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.querySelector(".navigation");
  
    menuToggle.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  
    document.querySelectorAll(".navigation a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("active");
      });
    });
  });

