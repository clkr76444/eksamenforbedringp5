// Formular - henter formularen fra HTML.
const form = document.getElementById("evalueringsSkema");

if (form) {
  // Validerer formularen og sender brugeren videre til en separat takkeside.
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // En simpel dataopsamling til demonstration i konsollen.
    const formData = new FormData(form);
    const navn = formData.get("navn");
    const serviceRating = formData.get("service");

    console.log("Brugeren har indtastet følgende:");
    console.log("Navn:", navn);
    console.log("Tilfredshed med service (1-5):", serviceRating);

    window.location.href = "tak-for-feedback.html";
  });
}
