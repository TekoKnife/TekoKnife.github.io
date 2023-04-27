function mostrarHora() {
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var minuto = dataAtual.getMinutes();
    var segundo = dataAtual.getSeconds();
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
    var horaCompleta = hora + ":" + minuto + ":" + segundo;
    document.getElementById("relogio").innerHTML = horaCompleta;
  }
  setInterval(mostrarHora, 1000);