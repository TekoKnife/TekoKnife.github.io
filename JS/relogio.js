function atualizarRelogio() {
  var agora = new Date();
  var hora = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();
  var horaString = hora.toString().padStart(2, '0');
  var minutosString = minutos.toString().padStart(2, '0');
  var segundosString = segundos.toString().padStart(2, '0');
  var relogio = document.getElementById("relogio");
  relogio.textContent = horaString + ":" + minutosString + ":" + segundosString;
}
setInterval(atualizarRelogio, 1000);