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

