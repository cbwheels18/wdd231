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


  fetch("data/lakes.json")
    .then(res => res.json())
    .then(lakes => {
      const path = window.location.pathname;


      if (path.includes("index")) {
        const lake = lakes[Math.floor(Math.random() * lakes.length)];
        console.log("Random lake chosen:", lake);
        const container = document.querySelector(".spotlight-container");
        container.innerHTML = `
          <div class="lake-card">
            <img src="${lake.image}" alt="${lake.name}" />
            <h3>${lake.name}</h3>
            <p>${lake.description}</p>
          </div>`;
      }


      if (path.includes("lakes")) {
        const list = document.getElementById("lakes-list");
        lakes.forEach(lake => {
          const div = document.createElement("div");
          div.classList.add("lake-card");
          div.innerHTML = `
            <img src="${lake.image}" alt="${lake.name}" />
            <h3>${lake.name}</h3>
            <p>${lake.location}</p>
            <p>${lake.description}</p>
          `;
          list.appendChild(div);
        });
      }


        if (path.includes("amenities")) {
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
                <img src="${lake.image}" alt="${lake.name}" />
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

            renderLakes(filtered);
        });
        }

    });
});
