# eksamenforbedringp5
Dette repository indeholder min forbedring til mit eksamensprojekt på 2. semester på Multimedieuddannelsen på UCL i Odense

## Evalueringsskema (Grocott Fysioterapi)

Projektet indeholder nu en simpel frontend-prototype af et evalueringsskema bygget med HTML, CSS og JavaScript.

### Filer

- `index.html`: Semantisk struktur med formularfelter, navigation og succes-popup
- `style.css`: Farver, layout, responsive breakpoints og komponent-styles
- `burgermenu.js`: Dynamisk menuindhold og burger-menu interaktion
- `formular.js`: Enkel submit-flow med native validering og popup ved succes

### Noter til koden

- Koden er holdt enkel med fokus på læsbarhed til eksamen.
- Formularen bruger `fieldset` og `legend` for tydelig semantik.
- JavaScript er delt i to filer for at adskille ansvar: navigation og formular.

### Hurtig start

1. Åbn `index.html` i din browser.
2. Udfyld formularen og test native validering.
3. Ved gyldig submit vises popup-beskeden.

### Næste skridt

- Tilknyt formularen til en backend (fx Firebase, Supabase eller et Node.js API)
- Gem svar i database
- Tilføj admin-overblik over indsamlede evalueringer
