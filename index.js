function VideoEnNuevaVentana (strURL, strTitulo) {
    window.open(strURL, strTitulo, "width=560, height=415");
}

function masPeliculas(event) {
    window.location=this.options[this.selectedIndex].value;
}