// Chela's Academy — backend de Google Apps Script
// Conecta la app con dos Google Sheets:
//   - Roster: quién puede entrar y con qué rol (lo editas tú a mano)
//   - Progress: registro de progreso que la app llena sola
//
// Instrucciones: pega este código completo en Extensions > Apps Script
// (desde cualquiera de los dos Sheets), luego Deploy > New deployment >
// Web app > Execute as: Me > Who has access: Anyone. Copia la URL resultante
// y pégala en index.html en la línea REPORT_URL = "".

var ROSTER_SHEET_ID = '1FnZPgj779euovst35DYaSJSeubyAOGFBtwOp3t3v5IQ';
var PROGRESS_SHEET_ID = '1X6vdkUoIZLdJbb332zgHJx8yV74EpRIrppWrDYG8lNY';

function doGet(e) {
  if (e.parameter.action === 'roster') {
    var sheet = SpreadsheetApp.openById(ROSTER_SHEET_ID).getSheets()[0];
    var data = sheet.getDataRange().getValues();
    var roster = [];
    for (var i = 1; i < data.length; i++) {
      var email = String(data[i][0] || '').trim().toLowerCase();
      var name = String(data[i][1] || '').trim();
      var role = String(data[i][2] || '').trim();
      if (email && name && role) {
        roster.push({ email: email, name: name, role: role });
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ roster: roster }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput(JSON.stringify({ error: 'unknown action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp.openById(PROGRESS_SHEET_ID).getSheets()[0];
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.email || '',
    data.name || '',
    data.role || '',
    data.moduleId || '',
    data.passed,
    data.score,
    data.critical,
    data.date || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
