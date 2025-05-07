const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const date = document.querySelector("#lastModified");

date.innerHTML = `<p>Last Modified: ${document.lastModified}</p>`