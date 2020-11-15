function VideoEnNuevaVentana (strURL, strTitulo) {
    window.open(strURL, strTitulo, "width=560, height=415");
}

function masPeliculas() {
    var x = document.getElementById("otraPeliculas").value;
    window.location=x;
  }