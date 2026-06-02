//Burgermenu - henter elementer ved Id navn fra HTML
const navbarMenu = document.getElementById("navbarMenu");
const navbarBurger = document.getElementById("navbarBurger");

// Menuens indhold defineres i en liste, som gør det nemt at tilføje eller fjerne menupunkter uden at rode i HTML-koden.
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
  // Nulstiller menuens HTML, så funktionen altid starter fra en ren container.
  navbarMenu.innerHTML = "";

  // For-loop, vi opretter et <a>-element for hvert menupunkt i listen ovenfor, beholder det samme link, giver dem en klasse og tilføjer dem til menuen.
  for (let i = 0; i < menuItems.length; i += 1) {
    const link = document.createElement("a");
    link.href = menuItems[i].link;
    link.textContent = menuItems[i].menuName;
    link.classList.add("navbar__menu-link");
    navbarMenu.appendChild(link);
  }
}

const navbarLinks = document.querySelectorAll(".navbar__menu-link");

if (navbarBurger && navbarMenu) {
  // Åbner/lukker menuen ved klik på burger-knappen.
  navbarBurger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    navbarBurger.classList.toggle("active");

    // active = menuen er synlig = attributter opdateres udfra hvilken state.
    if (navbarMenu.classList.contains("active")) {
      navbarBurger.setAttribute("aria-expanded", "true");
      navbarBurger.setAttribute("aria-label", "Luk menu");
    } else {
      navbarBurger.setAttribute("aria-expanded", "false");
      navbarBurger.setAttribute("aria-label", "Åbn menu");
    }
  });

  // Lukker menuen efter valg af et menupunkt.
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
      navbarBurger.classList.remove("active");
      navbarBurger.setAttribute("aria-expanded", "false");
      navbarBurger.setAttribute("aria-label", "Åbn menu");
    });
  });

  // Lukker menuen ved klik hvis man ikke trykker på burgerknap og menu.
  document.addEventListener("click", (event) => {
    if (!navbarMenu.contains(event.target) && !navbarBurger.contains(event.target)) {
      navbarMenu.classList.remove("active");
      navbarBurger.classList.remove("active");
      navbarBurger.setAttribute("aria-expanded", "false");
      navbarBurger.setAttribute("aria-label", "Åbn menu");
    }
  });
}
