// Henter formular-elementet fra HTML, så vi kan styre submit-flowet i JavaScript.
const form = document.getElementById("evalueringsSkema");

// Små hjælpefunktioner til gyldighedstjek og browserens valideringsbeskeder.
const isFormValid = (formElement) => formElement.checkValidity();
const showValidationMessages = (formElement) => formElement.reportValidity();

if (form) {
  // Registrerer en submit-listener, så vi kan kontrollere flowet før standard-submit.
  form.addEventListener("submit", (event) => {
    // Stopper standard-submit/reload, så vi kan validere først.
    event.preventDefault();

    // Tjekker om alle required-felter er gyldige.
    if (!isFormValid(form)) {
      // Viser browserens indbyggede valideringsbeskeder.
      showValidationMessages(form);
      // Stopper her, så ugyldige formularer ikke fortsætter.
      return;
    }

    // Opretter FormData med alle aktuelle formularfelter.
    const formData = new FormData(form);
    // Henter en enkelt værdi ud fra feltets name-attribut.
    const navn = formData.get("navn");
    // Henter valgt værdi fra service-radiofeltet.
    const serviceRating = formData.get("service");

    // Demo-output i konsollen, så man kan bekræfte dataopsamlingen.
    console.log("Brugeren har indtastet følgende:");
    console.log("Navn:", navn);
    console.log("Tilfredshed med service (1-5):", serviceRating);

    // Efter gyldig validering og dataopsamling sendes brugeren til takkesiden.
    window.location.href = "tak-for-feedback.html";
  });
}
