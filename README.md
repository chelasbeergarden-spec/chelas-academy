# Chela's Academy

App de entrenamiento gratuita, bilingüe (ES/EN), gamificada por dominio (mastery-gated) para el staff de **Chela's Coctelería** (Miami). Es un sitio estático — vive en GitHub Pages, sin backend.

## Archivos

- **index.html** — toda la app (login, lecciones, flashcards, exámenes, progreso, tabla admin). Edítalo solo para cambiar el comportamiento de la app.
- **modules.js** — todo el contenido de entrenamiento (44 módulos). Este es el archivo que editas para agregar/cambiar contenido. No requiere programar: copia un bloque `{ ... }`, pégalo antes del `];` final, y edita el texto.
- **README.md** — esta guía.

## Cómo funciona

1. El usuario inicia sesión solo con su **correo de trabajo** — el rol (Server, Bartender, Busser, Host, Manager) se lo asignas tú de antemano en el Google Sheet "Roster" (ver abajo). El usuario no elige su rol.
2. Si el correo no está en el Roster, la app le muestra un mensaje pidiéndole que avise a su gerente — no puede entrenar hasta que lo agregues.
3. Ve los módulos **CORE** (obligatorios para todos) + los de su track de rol, en orden.
4. Cada módulo se desbloquea solo después de aprobar el anterior (gating secuencial). Los módulos críticos (alérgenos, alcohol) requieren 100%.
5. Cada módulo: lecciones cortas → flashcards (si tiene) → examen con retroalimentación instantánea.
6. El progreso se guarda en el dispositivo (localStorage) y además se registra en el Google Sheet "Progress", así puedes ver a todo el equipo en un solo lugar sin depender de cada teléfono.

## Publicar en GitHub Pages

1. Sube estos 3 archivos a un repo público (ya lo tienes: `chelas-academy`).
2. Ve a **Settings → Pages → Deploy from branch**, selecciona `main` y carpeta `/ (root)`.
3. El sitio quedará disponible en `https://TU-USUARIO.github.io/chelas-academy/`.
4. Para actualizar el contenido, edita `modules.js` y haz commit — el sitio se actualiza solo.

## Agregar contenido a un módulo existente

Abre `modules.js`, busca el módulo por su `id` (ej. `"BT2"`), y agrega/edita:

```js
lessons: [
  { en: "English text", es: "Texto en español" },
],
quiz: [
  {
    q: { en: "Question?", es: "¿Pregunta?" },
    options: [
      { en: "Option A", es: "Opción A" },
      { en: "Option B", es: "Opción B" },
      { en: "Option C", es: "Opción C" },
      { en: "Option D", es: "Opción D" }
    ],
    correct: 0 // índice de la opción correcta
  }
]
```

## Agregar un módulo nuevo

Copia un bloque `{ id, track, title, lessons, quiz, pass, critical? }` completo dentro de `MODULES = [ ... ]` en `modules.js`, pégalo antes del `];` final, y edita todos los textos. Campos:

- `id`: código único (ej. `"S10"`).
- `track`: `CORE | SERVER | BARTENDER | BUSSER | HOST | MANAGER`.
- `title`, `lessons[]`, `quiz[]`: bilingües `{ en, es }`.
- `pass`: porcentaje mínimo para aprobar (usa `100` + `critical: true` para temas críticos como alérgenos o alcohol).
- `flashcards` (opcional): `[{ front: {en,es}, back: {en,es} }]`.

## Pendientes conocidos (del lado de Chela's)

- **BT2** — medidas exactas de cóctel, cristalería y guarnición (pendiente).
- **H3** — sistema/software de reservaciones, tamaño máximo de grupo sin reservación, política de no-show/cancelación.

Actualiza esos módulos en `modules.js` en cuanto tengas la información.

## Login por correo + control de acceso (Roster) — YA CREADO

Ya existen dos Google Sheets listos para usar:

- **[Chela's Academy - Roster](https://docs.google.com/spreadsheets/d/1SSIl6sG4UW2vFnGfwf9_NdxjwZEq9UYbd4w9GxfIH30/edit)** — aquí decides quién puede entrenar y con qué rol. Columnas: `Email, Name, Role`. Para dar de alta a alguien, solo agrega una fila (borra la fila de ejemplo). `Role` debe ser exactamente uno de: `Server`, `Bartender`, `Busser`, `Host`, `Manager`.
- **[Chela's Academy - Progress](https://docs.google.com/spreadsheets/d/1eeLUOidILlzIL8lmzzSoin7erQkrnW9hXxcSF1fVU9E/edit)** — aquí la app registra sola cada módulo aprobado de todo el equipo (no la edites a mano).

El código que conecta la app con ambos Sheets ya está escrito en **`apps-script/Code.gs`** (con los IDs de ambos Sheets ya integrados — no hay que configurar nada ahí). Falta un único paso manual que Google exige hacer desde tu cuenta (no se puede automatizar):

1. Abre el **[Roster](https://docs.google.com/spreadsheets/d/1SSIl6sG4UW2vFnGfwf9_NdxjwZEq9UYbd4w9GxfIH30/edit)**.
2. Ve a **Extensiones → Apps Script**.
3. Borra el contenido de ejemplo y pega todo el contenido de `apps-script/Code.gs` (está en este repo).
4. Click **Implementar → Nueva implementación**. Tipo: **Aplicación web**. Ejecutar como: **Yo**. Quién tiene acceso: **Cualquiera**.
5. Click **Implementar**, autoriza los permisos que pida Google, y copia la URL que te da (termina en `/exec`).
6. Pega esa URL en `index.html`, en la línea:

```javascript
const REPORT_URL = ""; // <-- pega aquí tu URL de Apps Script
```

7. Haz commit y publica. A partir de ahí:
   - Solo los correos que estén en el Roster pueden entrar, y cada uno ve automáticamente el rol que le asignaste.
   - Cada módulo aprobado se registra en el Sheet "Progress" — ahí ves a todo el equipo sin depender de cada teléfono.

**Nota de privacidad:** cualquiera con el link de la app (URL de Apps Script) puede leer el Roster (lista de correos/roles) — normal para una herramienta interna, pero no compartas esa URL públicamente.

**Si cambias de opinión sobre un rol:** edita la fila en el Roster — el cambio aplica la próxima vez que esa persona inicie sesión.

## Próximos pasos recomendados

1. Publicar el sitio (arriba) — ya hecho.
2. Completar el paso de Apps Script (arriba) para activar login por correo y seguimiento centralizado.
3. Agregar a tu equipo real en el Roster (borra la fila de ejemplo primero).
4. Completar BT2 y H3 con la información de Chela's.
5. Agregar fotos reales de platos/bebidas como flashcards con el tiempo.
