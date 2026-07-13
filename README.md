# Chela's Academy

App de entrenamiento gratuita, bilingüe (ES/EN), gamificada por dominio (mastery-gated) para el staff de **Chela's Coctelería** (Miami). Es un sitio estático — vive en GitHub Pages, sin backend.

## Archivos

- **index.html** — toda la app (login, lecciones, flashcards, exámenes, progreso, tabla admin). Edítalo solo para cambiar el comportamiento de la app.
- **modules.js** — todo el contenido de entrenamiento (44 módulos). Este es el archivo que editas para agregar/cambiar contenido. No requiere programar: copia un bloque `{ ... }`, pégalo antes del `];` final, y edita el texto.
- **README.md** — esta guía.

## Cómo funciona

1. El usuario inicia sesión con su **nombre** y **rol** (Server, Bartender, Busser, Host, Manager).
2. Ve los módulos **CORE** (obligatorios para todos) + los de su track de rol, en orden.
3. Cada módulo se desbloquea solo después de aprobar el anterior (gating secuencial). Los módulos críticos (alérgenos, alcohol) requieren 100%.
4. Cada módulo: lecciones cortas → flashcards (si tiene) → examen con retroalimentación instantánea.
5. El progreso se guarda en el dispositivo (localStorage). Los gerentes ven una tabla **"Progreso"** con exportación a CSV.

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

## Seguimiento centralizado de progreso (opcional, gratis)

GitHub Pages no tiene base de datos — el progreso se guarda por dispositivo. Para que un gerente vea a todo el equipo en un solo lugar, conecta un Google Sheet vía Apps Script:

1. Crea un Google Sheet nuevo.
2. Ve a **Extensiones → Apps Script** y pega este código:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.name,
    data.role,
    data.moduleId,
    data.passed,
    data.score,
    data.critical,
    data.date
  ]);
  return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Implementar → Nueva implementación → Aplicación web**. Ejecutar como "Yo", acceso "Cualquiera".
4. Copia la URL de la aplicación web.
5. Pégala en `index.html`, en la línea:

```javascript
const REPORT_URL = ""; // <-- pega aquí tu URL de Apps Script
```

6. Haz commit y publica. A partir de ahí, cada módulo aprobado se registrará también en el Google Sheet.

## Próximos pasos recomendados

1. Publicar el sitio (arriba).
2. Configurar el Google Sheet para progreso centralizado.
3. Completar BT2 y H3 con la información de Chela's.
4. Agregar fotos reales de platos/bebidas como flashcards con el tiempo.
