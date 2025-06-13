import { initMenuToggle } from './menu.js';
import { fetchLakes, renderRandomLake, renderLakesList } from './dataHandler.js';
import { initAmenitiesFilter } from './amenitiesFilter.js';
import { createModal } from './modal.js';

document.addEventListener("DOMContentLoaded", async () => {
  initMenuToggle();

  const lakes = await fetchLakes();

  const path = window.location.pathname;

  if (path.includes("index")) {
    renderRandomLake(lakes);
  }

  if (path.includes("lakes")) {
    renderLakesList(lakes);
  }

  if (path.includes("amenities")) {
    initAmenitiesFilter(lakes);
  }
});
