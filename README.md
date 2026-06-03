# eksamenforbedringp5
Dette repository indeholder en forbedret version af mit eksamensprojekt fra 2. semester på Multimedieuddannelsen (UCL Odense).

## Evalueringsskema (Grocott Fysioterapi)

Projektet er en frontend-løsning bygget med HTML, CSS og JavaScript.

### Filer

- `index.html`: Evalueringsformular med navigation og footer
- `tak-for-feedback.html`: Takkeside efter gyldig submit
- `style.css`: Styling, layout og responsive breakpoints
- `burgermenu.js`: Dynamisk burger-menu
- `formular.js`: Submit-flow med native validering og redirect til takkesiden

### Noter til koden

- Koden er holdt enkel med fokus på læsbarhed til eksamen.
- Formularen bruger `fieldset` og `legend` for tydelig semantik.
- JavaScript er delt i to filer for at adskille ansvar: navigation og formular.

### Hurtig start

1. Åbn `index.html` i din browser.
2. Udfyld formularen og test native validering.
3. Ved gyldig submit videresendes brugeren til `tak-for-feedback.html`.

### Næste skridt

- Tilknyt formularen til en backend (fx Firebase, Supabase eller et Node.js API)
- Gem svar i database
- Tilføj admin-overblik over indsamlede evalueringer
