// Chela's Academy — backend de Google Apps Script
// Conecta la app con dos Google Sheets:
//   - Roster: quién puede entrar y con qué rol (columnas: email, name, role, pin)
//   - Progress: registro de progreso que la app llena sola
//
// Para actualizar: pega este código completo en Extensions > Apps Script,
// luego Deploy > Manage deployments > editar > "New version" > Deploy.
// La URL NO cambia — no necesitas actualizar index.html.

var ROSTER_SHEET_ID   = '1FnZPgj779euovst35DYaSJSeubyAOGFBtwOp3t3v5IQ';
var PROGRESS_SHEET_ID = '1X6vdkUoIZLdJbb332zgHJx8yV74EpRIrppWrDYG8lNY';

/* ─── GET ─── */
function doGet(e) {
  var action = e.parameter.action;
  if (action === 'roster')      return getRoster();
  if (action === 'allProgress') return getAllProgress();
  return jsonOut({ error: 'unknown action' });
}

function getRoster() {
  var sheet  = SpreadsheetApp.openById(ROSTER_SHEET_ID).getSheets()[0];
  var data   = sheet.getDataRange().getValues();
  var roster = [];
  for (var i = 1; i < data.length; i++) {
    var email = String(data[i][0] || '').trim().toLowerCase();
    var name  = String(data[i][1] || '').trim();
    var role  = String(data[i][2] || '').trim();
    var pin   = String(data[i][3] || '').trim();
    if (email && name && role) roster.push({ email: email, name: name, role: role, pin: pin });
  }
  return jsonOut({ roster: roster });
}

function getAllProgress() {
  var sheet    = SpreadsheetApp.openById(PROGRESS_SHEET_ID).getSheets()[0];
  var data     = sheet.getDataRange().getValues();
  var progress = [];
  for (var i = 1; i < data.length; i++) {
    var email = String(data[i][1] || '').trim().toLowerCase();
    if (!email) continue;
    progress.push({
      timestamp : data[i][0],
      email     : email,
      name      : String(data[i][2] || '').trim(),
      role      : String(data[i][3] || '').trim(),
      moduleId  : String(data[i][4] || '').trim(),
      passed    : data[i][5],
      score     : data[i][6],
      critical  : data[i][7],
      date      : data[i][8]
    });
  }
  return jsonOut({ progress: progress });
}

/* ─── POST ─── */
function doPost(e) {
  var data   = JSON.parse(e.postData.contents);
  var action = data.action;

  if (action === 'addRoster')    return addRosterEntry(data);
  if (action === 'removeRoster') return removeRosterEntry(data);
  if (action === 'updateRoster') return updateRosterEntry(data);

  // Default: registrar progreso de entrenamiento
  var sheet = SpreadsheetApp.openById(PROGRESS_SHEET_ID).getSheets()[0];
  sheet.appendRow([
    new Date(),
    data.email    || '',
    data.name     || '',
    data.role     || '',
    data.moduleId || '',
    data.passed,
    data.score,
    data.critical,
    data.date     || ''
  ]);
  return jsonOut({ status: 'ok' });
}

function addRosterEntry(data) {
  var sheet = SpreadsheetApp.openById(ROSTER_SHEET_ID).getSheets()[0];
  var email = String(data.email || '').trim().toLowerCase();
  var name  = String(data.name  || '').trim();
  var role  = String(data.role  || '').trim();
  var pin   = String(data.pin   || '').trim();
  if (!email || !name || !role) return jsonOut({ error: 'missing fields' });
  var rows = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0] || '').trim().toLowerCase() === email)
      return jsonOut({ error: 'email already exists' });
  }
  sheet.appendRow([email, name, role, pin]);
  return jsonOut({ status: 'ok' });
}

function removeRosterEntry(data) {
  var sheet = SpreadsheetApp.openById(ROSTER_SHEET_ID).getSheets()[0];
  var email = String(data.email || '').trim().toLowerCase();
  var rows  = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0] || '').trim().toLowerCase() === email) {
      sheet.deleteRow(i + 1);
      return jsonOut({ status: 'ok' });
    }
  }
  return jsonOut({ error: 'not found' });
}

function updateRosterEntry(data) {
  var sheet    = SpreadsheetApp.openById(ROSTER_SHEET_ID).getSheets()[0];
  var oldEmail = String(data.oldEmail || '').trim().toLowerCase();
  var newEmail = String(data.email    || '').trim().toLowerCase();
  var name     = String(data.name     || '').trim();
  var role     = String(data.role     || '').trim();
  var pin      = String(data.pin      !== undefined ? data.pin : '').trim();
  var rows     = sheet.getDataRange().getValues();
  for (var i = 1; i < rows.length; i++) {
    if (String(rows[i][0] || '').trim().toLowerCase() === oldEmail) {
      // If pin is empty string, preserve the existing pin
      var existingPin = String(rows[i][3] || '').trim();
      var finalPin    = (pin !== '') ? pin : existingPin;
      sheet.getRange(i + 1, 1, 1, 4).setValues([[newEmail, name, role, finalPin]]);
      return jsonOut({ status: 'ok' });
    }
  }
  return jsonOut({ error: 'not found' });
}

/* ─── Helper ─── */
function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
