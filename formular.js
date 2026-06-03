// Henter formular-elementet via id'et fra HTML, så vi kan arbejde med submit i JavaScript.
const form = document.getElementById("evalueringsSkema");

if (form) {
  // Registrerer en submit-listener, så vi kan kontrollere flowet før browserens standard-submit.
  form.addEventListener("submit", (event) => {
    // Stopper standardopførsel (direkte submit/reload), så vi kan validere først.
    event.preventDefault();

    // Tjekker om alle required-felter er gyldige.
    if (!form.checkValidity()) {
      // Viser browserens indbyggede valideringsbeskeder til brugeren.
      form.reportValidity();
      // Stopper funktionen her, så ugyldig formular ikke går videre.
      return;
    }

    // Opretter et FormData-objekt med alle felter fra formularen.
    const formData = new FormData(form);
    // Henter en enkelt værdi ud fra feltets name-attribut.
    const navn = formData.get("navn");
    // Henter den valgte værdi fra service-radiofeltet.
    const serviceRating = formData.get("service");

    // Demo-output i konsollen, så man kan verificere at data er læst korrekt.
    console.log("Brugeren har indtastet følgende:");
    console.log("Navn:", navn);
    console.log("Tilfredshed med service (1-5):", serviceRating);

    // Når validering og dataopsamling er gennemført, sendes brugeren til takkesiden.
    window.location.href = "tak-for-feedback.html";
  });
}
