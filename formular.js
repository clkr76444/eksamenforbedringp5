// Formular - henter elementer ved Id navn fra HTML
const form = document.getElementById("evalueringsSkema");
const feedbackPopup = document.getElementById("feedbackPopup");
const feedbackLuk = document.getElementById("feedbackLuk");

// Viser popup efter gyldig submit. Hvis ingen popup findes, springes kodestykket over.
function visFeedbackPopup() {
  if (!feedbackPopup) {
    return;
  }
  feedbackPopup.classList.remove("feedbackPopup--skjult");
}

// Luk feedback-popup. Hvis ingen popup findes, springes kodestykket over. 
function lukFeedbackPopup() {
  if (!feedbackPopup) {
    return;
  }

  feedbackPopup.classList.add("feedbackPopup--skjult");
}

//Ved tryk på luk-knappen, kaldes funktionen der skjuler popup.
if (feedbackLuk) {
  feedbackLuk.addEventListener("click", lukFeedbackPopup);
}

if (feedbackPopup) {
  // Hvis klik er på baggrunden, så lukker popuppen.
  feedbackPopup.addEventListener("click", (event) => {
    if (event.target === feedbackPopup) {
      lukFeedbackPopup();
    }
  });
}

if (form) {
  // Lytter på submit-eventet på formularen og stopper browserens automatiske genindlæsning for at tjekke om brugeren har udfyldt alt korrekt.
  form.addEventListener("submit", (event) => {
    event.preventDefault();
 // Hvis formen ikke er gyldig, vises browserens indbyggede valideringsbeskeder, og funktionen stopper. Ellers spring kodestykket over.
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

 // Hvis formen er gyldig, vises feedback-popup og formen nulstilles.
    visFeedbackPopup();
    form.reset();
  });
}
