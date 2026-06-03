// Henter menu-containeren fra HTML, hvor links skal indsættes dynamisk.
const navbarMenu = document.getElementById("navbarMenu");
// Henter burger-knappen, som åbner og lukker mobilmenuen.
const navbarBurger = document.getElementById("navbarBurger");

// Data-kilde til navigationen. Hvert objekt bliver til et link i menuen.
const menuItems = [
  { menuName: "Behandlinger", link: "#" },
  { menuName: "Holdtræning", link: "#" },
  { menuName: "Om klinikken", link: "#" },
  { menuName: "Priser", link: "#" },
  { menuName: "Til forældre", link: "#" },
  { menuName: "Til erhverv", link: "#" },
  { menuName: "Kontakt", link: "#" },
  { menuName: "Book tid", link: "#" }
];

if (navbarMenu) {
  // Tømmer containeren, så vi undgår dubletter hvis scriptet kører igen.
  navbarMenu.innerHTML = "";

  // Opretter et link-element for hvert menupunkt og tilføjer det til DOM'en.
  for (let i = 0; i < menuItems.length; i += 1) {
    // Opretter nyt anker-tag i memory.
    const link = document.createElement("a");
    // Sætter destinationen fra menu-data.
    link.href = menuItems[i].link;
    // Sætter synlig tekst i linket.
    link.textContent = menuItems[i].menuName;
    // Tilføjer klasse til styling i CSS.
    link.classList.add("navbar__menu-link");
    // Indsætter linket i menu-containeren.
    navbarMenu.appendChild(link);
  }
}

// Henter alle menu-links til senere klik-håndtering.
const navbarLinks = document.querySelectorAll(".navbar__menu-link");

if (navbarBurger && navbarMenu) {
  // Klik på burger toggler menuens synlighed.
  navbarBurger.addEventListener("click", () => {
    // 'active' styrer animation/visning i CSS.
    navbarMenu.classList.toggle("active");
    navbarBurger.classList.toggle("active");

    // ARIA-attributter opdateres for bedre tilgængelighed.
    if (navbarMenu.classList.contains("active")) {
      navbarBurger.setAttribute("aria-expanded", "true");
      navbarBurger.setAttribute("aria-label", "Luk menu");
    } else {
      navbarBurger.setAttribute("aria-expanded", "false");
      navbarBurger.setAttribute("aria-label", "Åbn menu");
    }
  });

  // Når brugeren vælger et menupunkt, lukkes menuen igen.
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      navbarBurger.classList.remove("active");
      navbarBurger.setAttribute("aria-expanded", "false");
      navbarBurger.setAttribute("aria-label", "Åbn menu");
    });
  });

  // Klik uden for menu + burger lukker menuen.
  document.addEventListener("click", (event) => {
    // contains() sikrer, at klik inde i menuen ikke lukker den utilsigtet.
    if (!navbarMenu.contains(event.target) && !navbarBurger.contains(event.target)) {
      navbarMenu.classList.remove("active");
      navbarBurger.classList.remove("active");
      navbarBurger.setAttribute("aria-expanded", "false");
      navbarBurger.setAttribute("aria-label", "Åbn menu");
    }
  });
}
