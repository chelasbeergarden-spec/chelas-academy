# Chela's Academy

App de entrenamiento gratuita, bilingüe (ES/EN), gamificada por dominio (mastery-gated) para el staff de **Chela's Coctelería** (Miami). Es un sitio estático — vive en GitHub Pages, sin backend propio (usa Google Apps Script + Google Sheets como base de datos ligera).

## Enlaces clave

- **App en vivo:** https://chelasbeergarden-spec.github.io/chelas-academy/
- **Repositorio:** `chelasbeergarden-spec/chelas-academy`, rama `main` (y `claude/chelas-academy-summary-i4mfds`, sincronizada con `main`)
- **Roster (quién puede entrar y con qué rol):** https://docs.google.com/spreadsheets/d/1FnZPgj779euovst35DYaSJSeubyAOGFBtwOp3t3v5IQ/edit
- **Progress (progreso de todo el equipo, se llena solo):** https://docs.google.com/spreadsheets/d/1X6vdkUoIZLdJbb332zgHJx8yV74EpRIrppWrDYG8lNY/edit
- **Apps Script (backend):** ya desplegado y conectado — la URL vive en `index.html`, variable `REPORT_URL` (línea ~260). No necesitas tocarlo salvo que cambies de Sheet.

## Archivos

- **index.html** — toda la app (login, lecciones, flashcards, exámenes, progreso, admin, onboarding). Edítalo solo para cambiar el *comportamiento* de la app, no el contenido de entrenamiento.
- **modules.js** — todo el contenido de entrenamiento (67 módulos). Este es el archivo que editas para agregar/cambiar contenido de los cursos. No requiere programar: copia un bloque `{ ... }`, pégalo antes del `];` final, y edita el texto.
- **apps-script/Code.gs** — el backend (Google Apps Script) que conecta la app con los Sheets de Roster y Progress. Ya está desplegado; solo se toca si cambias de Sheet o necesitas nueva lógica de servidor.
- **README.md** — esta guía.

## Roles y tracks

Hay **6 roles**, cada uno ve CORE (obligatorio para todos) + su propio track, en orden secuencial (cada módulo se desbloquea al aprobar el anterior):

| Rol | Track | Módulos |
|---|---|---|
| Server | SERVER | 11 |
| Bartender | BARTENDER | 11 |
| Busser | BUSSER | 7 |
| Host | HOST | 8 |
| Kitchen | KITCHEN | 11 |
| Manager | MANAGER | 11 |

**Manager** ve además los 6 tracks completos (para supervisar contenido), no solo el suyo. CORE tiene 8 módulos (incluye el manifiesto de expectativas C0, las políticas de la empresa CPOL con confirmación por checkbox en vez de examen, y el módulo de escalación CESC).

Los módulos críticos (alergias, alcohol, seguridad de cocina K11) requieren **100%** para aprobar, no el umbral normal (80%).

## Cómo funciona el login

1. El usuario inicia sesión solo con su **correo de trabajo** — el rol se lo asignas tú de antemano en el **Roster**. El usuario nunca elige su propio rol.
2. Si el correo no está en el Roster, la app le pide que avise a su gerente — no puede entrenar hasta que lo agregues.
3. El rol se revisa en segundo plano cada vez que abre la app — si le cambias el rol en el Roster, se actualiza solo la próxima vez que entre, sin que tenga que cerrar sesión manualmente.
4. El progreso se guarda en el dispositivo (localStorage) **y** se registra en el Sheet de Progress, así puedes ver a todo el equipo desde un solo lugar.

## Cuenta de pruebas (QA) — acceso total sin restricciones

`freddyb@hotlimekitchen.com` tiene **todo desbloqueado en los 6 tracks**, sin importar su rol en el Roster ni su progreso — pensado para hacer pruebas rápidas sin tener que aprobar módulos en orden. Está definido en `index.html` en la constante `QA_TEST_EMAILS` (línea ~264). Para agregar o quitar cuentas de prueba, edita esa lista.

## Panel de Manager

Un usuario con rol Manager ve dos botones extra en el header:

- **Progreso** — tabla de todo el equipo (nombre, correo, rol, % completado, si los módulos críticos están OK) + botón para exportar CSV. Refleja el dispositivo actual; el registro completo de todo el equipo vive en el Sheet de Progress.
- **Onboarding** — checklist de las 6 fases de incorporación (Entrevista/Oferta → Pre-boarding → Día 1 → Semana 1 → Certificación → Evaluación 30/60/90) por candidato nuevo. Se guarda solo en este dispositivo (no está centralizado en el Sheet todavía).

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
    correct: 0 // índice de la opción correcta (el orden se mezcla al azar en pantalla, esto no cambia)
  }
]
```

Las opciones del examen se muestran en **orden aleatorio** cada vez que se abre el examen — no hace falta variar tú el orden en el código, la app ya lo hace.

## Agregar un módulo nuevo

Copia un bloque completo dentro de `MODULES = [ ... ]` en `modules.js`, pégalo antes del `];` final, y edita todos los textos. Campos:

- `id`: código único (ej. `"S10"`, `"K12"`).
- `track`: `CORE | SERVER | BARTENDER | BUSSER | HOST | KITCHEN | MANAGER`.
- `category`: una de `Menú | Bebidas | Servicio | Alcohol | Práctico | Alergias` (controla el color del badge y el filtro por categoría).
- `title`, `lessons[]`: bilingües `{ en, es }`. Los saltos de línea (`\n`) dentro de un texto de lección se muestran como líneas separadas — útil para listas (horarios, ingredientes, pasos).
- `quiz[]`: como arriba. Omítelo solo si el módulo es de **solo lectura + confirmación** (ver abajo).
- `pass`: porcentaje mínimo para aprobar (usa `100` + `critical: true` para temas críticos como alérgenos, alcohol, o seguridad).
- `flashcards` (opcional): `[{ front: {en,es}, back: {en,es} }]` — tarjetas que se voltean, antes del examen.
- `policyOnly` (opcional, `true`): en vez de examen, el módulo termina con un checkbox de "leí y entiendo" — úsalo para políticas que se deben reconocer, no evaluar (ver el módulo `CPOL` como ejemplo).

## Agregar un rol/track nuevo

1. En `index.html`, agrega el rol a `ROLE_TRACK`, el track a `ALL_TRACKS`, y la etiqueta a `TRACK_LABEL` (busca esas tres constantes, están juntas cerca de la línea 260).
2. Agrega la opción al `<select id="onb-new-role">` en la pestaña de Onboarding.
3. Agrega los módulos del nuevo track en `modules.js` con ese `track`.
4. Asigna ese rol a alguien en el Roster para probarlo, o usa la cuenta QA.

## Validar el contenido antes de publicar

Después de editar `modules.js`, conviene validar que no haya errores de estructura (IDs duplicados, índices de respuesta fuera de rango, textos bilingües incompletos) antes de hacer commit:

```bash
cp modules.js /tmp/check.js && echo "module.exports = MODULES;" >> /tmp/check.js
node -e '
const MODULES = require("/tmp/check.js");
console.log("Total:", MODULES.length);
const ids = MODULES.map(m=>m.id);
console.log("IDs duplicados:", ids.filter((id,i)=>ids.indexOf(id)!==i));
'
```

## Publicar cambios

El sitio se despliega solo vía GitHub Pages en cuanto se hace push a `main` — no hay paso manual de build. Flujo típico:

```bash
git add modules.js index.html
git commit -m "Descripción del cambio"
git push origin main
```

(Este repo no usa Pull Requests para este flujo — se trabaja directo contra `main`.)

## Pendientes conocidos (del lado de Chela's)

- **BT2** — medidas exactas de cóctel (oz) y cristalería específica por bebida (pendiente).
- El resto de las políticas de empresa (`CPOL`), el sistema de reservaciones (`H3`), y las políticas de alcohol/alergias ya están completas con información real.
- El tab de **Onboarding** todavía guarda el progreso solo en el dispositivo — si se quiere centralizar en un Google Sheet (como Progress), es la mejora natural siguiente.

## Configuración de acceso por correo (Roster) — ya activo

Esto ya está funcionando en producción; se documenta aquí solo por si hay que reconfigurarlo desde cero (por ejemplo, si se migra a otra cuenta de Google):

1. Abre el **[Roster](https://docs.google.com/spreadsheets/d/1FnZPgj779euovst35DYaSJSeubyAOGFBtwOp3t3v5IQ/edit)**. Columnas: `Email, Name, Role`. `Role` debe ser exactamente uno de: `Server`, `Bartender`, `Busser`, `Host`, `Kitchen`, `Manager`.
2. El código que conecta la app con los Sheets está en `apps-script/Code.gs`, ya desplegado como Web App con acceso "Cualquiera".
3. La URL de esa implementación ya está pegada en `index.html` (`REPORT_URL`). Si se re-despliega el Apps Script, hay que actualizar esa URL y volver a hacer commit.

**Nota de privacidad:** cualquiera con la URL de Apps Script puede leer el Roster (lista de correos/roles) — normal para una herramienta interna, pero no se debe compartir esa URL públicamente.

**Para cambiar el rol de alguien:** edita su fila en el Roster — el cambio aplica automáticamente la próxima vez que esa persona entre a la app (no necesita que borre caché ni cierre sesión).
