import { createModal } from './modal.js';

const modal = createModal();

export async function fetchLakes() {
  const res = await fetch("data/lakes.json");
  return await res.json();
}

export function renderRandomLake(lakes) {
  const lake = lakes[Math.floor(Math.random() * lakes.length)];
  const container = document.querySelector(".spotlight-container");
  container.innerHTML = `
    <div class="lake-card">
      <img src="${lake.image}" alt="${lake.name}" loading="lazy"/>
      <h3>${lake.name}</h3>
      <p>${lake.description}</p>
    </div>`;
}

export function renderLakesList(lakes) {
  const list = document.getElementById("lakes-list");
  list.innerHTML = '';
  lakes.forEach(lake => {
    const div = document.createElement("div");
    div.classList.add("lake-card");
    div.tabIndex = 0;
    div.innerHTML = `
      <img src="${lake.image}" alt="${lake.name}" loading="lazy"/>
      <h3>${lake.name}</h3>
      <p>${lake.location}</p>
      <p>${lake.description}</p>
    `;
    div.addEventListener('click', () => {
      modal.openModal(lake.name, `
        <img src="${lake.image}" alt="${lake.name}" style="max-width:100%;"/>
        <p>${lake.description}</p>
        <p><strong>Amenities:</strong> ${lake.amenities.join(", ")}</p>
      `);
    });
    div.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        modal.openModal(lake.name, `
          <img src="${lake.image}" alt="${lake.name}" style="max-width:100%;"/>
          <p>${lake.description}</p>
          <p><strong>Amenities:</strong> ${lake.amenities.join(", ")}</p>
        `);
      }
    });
    list.appendChild(div);
  });
}
