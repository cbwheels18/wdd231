const params = new URLSearchParams(window.location.search);
const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const phone = params.get("phone");
const business = params.get("organization");
const timestamp = params.get("timestamp");

const confirmation = document.getElementById("confirmation");

confirmation.innerHTML = `
  <p><strong>First Name:</strong> ${firstName}</p>
  <p><strong>Last Name:</strong> ${lastName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Mobile Number:</strong> ${phone}</p>
  <p><strong>Business Name:</strong> ${business}</p>
  <p><strong>Submitted On:</strong> ${new Date(timestamp).toLocaleString()}</p>
`;
