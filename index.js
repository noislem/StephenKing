VideoEnNuevaVentana = function VideoEnNuevaVentana (strURL, strTitulo) {
    window.open(strURL, strTitulo, "width=560, height=415");
}

masPeliculas = function masPeliculas() {
    var x = document.getElementById("otraPeliculas").value;
    window.location=x;
  }
