export function initAmenitiesFilter(lakes) {
  const filterToggle = document.getElementById("filter-toggle");
  const filterOptions = document.getElementById("filter-options");
  const searchButton = document.getElementById("filter-search");
  const results = document.getElementById("filtered-results");
  const noResults = document.getElementById("no-results");

  filterToggle.addEventListener("click", () => {
    filterOptions.classList.toggle("hidden");
  });

  const renderLakes = (filteredLakes) => {
    results.innerHTML = "";
    if (filteredLakes.length === 0) {
      noResults.classList.remove("hidden");
      return;
    }
    noResults.classList.add("hidden");

    filteredLakes.forEach(lake => {
      const div = document.createElement("div");
      div.classList.add("lake-card");
      div.innerHTML = `
        <img src="${lake.image}" alt="${lake.name}" loading="lazy" />
        <h3>${lake.name}</h3>
        <p><strong>Location:</strong> ${lake.location}</p>
        <p><strong>Description:</strong> ${lake.description}</p>
        <p><strong>Amenities:</strong> ${lake.amenities.join(", ")}</p>
      `;
      results.appendChild(div);
    });
  };

  searchButton.addEventListener("click", () => {
    const selected = Array.from(filterOptions.querySelectorAll("input:checked")).map(cb => cb.value);
    if (selected.length === 0) {
      renderLakes([]);
      return;
    }

    const filtered = lakes.filter(lake =>
      selected.every(sel => lake.amenities.includes(sel))
    );

    // Save selected filters to localStorage (new feature)
    localStorage.setItem('selectedAmenities', JSON.stringify(selected));

    renderLakes(filtered);
  });

  // On load, restore filter from localStorage
  const saved = JSON.parse(localStorage.getItem('selectedAmenities'));
  if (saved && saved.length > 0) {
    saved.forEach(val => {
      const checkbox = filterOptions.querySelector(`input[value="${val}"]`);
      if (checkbox) checkbox.checked = true;
    });
    searchButton.click(); // trigger filter with restored filters
  }
}
