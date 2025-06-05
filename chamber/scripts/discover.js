document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('visit-message');
  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');
  
  if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days === 0) {
      message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
      message.textContent = "You last visited 1 day ago.";
    } else {
      message.textContent = `You last visited ${days} days ago.`;
    }
  }
  localStorage.setItem('lastVisit', now);

  fetch('data/discover.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('discover-cards');
      data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'discover-card';
        card.style.gridArea = `card${index + 1}`;
        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure><img src="${item.image}" alt="${item.name}" width="300" height="200"></figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
        `;
        container.appendChild(card);
      });
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

