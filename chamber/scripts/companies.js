const url = 'data/members.json';
const cards = document.querySelector('.cards');

async function getCompanyData() {
  const response = await fetch(url); // request
  const data = await response.json(); // parse the JSON data
  displayCompanies(data);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement('div');
        let name = document.createElement('h2')
        let info = document.createElement('div');
        let image = document.createElement('img')
        let email = document.createElement('p')
        let phone = document.createElement('p')
        let website = document.createElement('p')
        let bold = document.createElement('strong')
        card.classList.add('card');
        info.classList.add('info');
        name.textContent = `${company.name}`;
        email.textContent = `Email: ${company.email}`;
        phone.textContent = `Phone: ${company.phone}`;
        website.textContent = `Website: ${company.website}`;
        // birthDate.textContent = `Date of Birth: ${company.birthdate}`;
        // birthPlace.textContent = `Place of Birth: ${company.birthplace}`;
        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Image of ${company.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        info.appendChild(name);
        card.appendChild(image);
        info.appendChild(email);
        info.appendChild(phone);
        info.appendChild(website);
        card.appendChild(info);
        cards.appendChild(card);
    })
}

  const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}