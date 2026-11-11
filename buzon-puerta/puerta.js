// Puerta del buzón: esta página pública solo pone el ícono en la pantalla de inicio del iPhone
// y manda al buzón de Google. La dirección del buzón NO está guardada aquí: viene en el enlace (?u=...),
// que solo tiene quien lo agregó a su pantalla de inicio. Solo acepta direcciones de Google Apps Script.
(function(){
  var u = new URLSearchParams(location.search).get('u') || '';
  var ok = /^https:\/\/script\.google\.com\/(a\/[A-Za-z0-9._-]+\/)?macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(u);
  var msg = document.getElementById('msg');
  if (!ok) { msg.textContent = 'Este enlace no trae la dirección del buzón. Cópialo otra vez desde Ajustes → Buzón en la laptop.'; return; }
  var desdeIcono = navigator.standalone === true || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);
  if (desdeIcono) { location.replace(u); return; }
  // Abierta en Safari: no brinca sola, para que se pueda agregar a la pantalla de inicio con este ícono
  msg.textContent = 'Buzón GDO';
  document.getElementById('guia').hidden = false;
  var a = document.getElementById('ir'); a.href = u; a.hidden = false;
})();
