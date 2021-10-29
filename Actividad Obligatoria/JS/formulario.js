function validacion() {
    var valor1 = document.getElementById("nombre").value;
    if (valor1 == null || valor1.length == 0 || /^\s+$/.test(valor1)) {
        alert('[ERROR] El campo Nombre no puede quedar vacío');
        return false;
    }
    var valor2 = document.getElementById("apellido").value;
    if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert('[ERROR] El campo Apellido no puede quedar vacío');
        return false;
    }
    var opciones = document.getElementsByName("modelo");
    var seleccionado = false;
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            break;
        }
    }
    if (!seleccionado) {
        alert('[ERROR] Selecciona una opción de Modelo');
        return false;
    }
    var indice = document.getElementById("aroma").selectedIndex;
    if (indice == null || indice == 0) {
        alert('[ERROR] Selecciona una opción de Aroma');
        return false;
    }
    var valor3 = document.getElementById("direccion").value;
    if (valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3)) {
        alert('[ERROR] El campo Dirección no puede quedar vacío');
        return false;
    }
    var valor4 = document.getElementById("cp").value;
    if (valor4 == null || valor4.length == 0 || /^\s+$/.test(valor4)) {
        alert('[ERROR] El campo Código Postal no puede quedar vacío');
        return false;
    }
    var valor5 = document.getElementById("cel").value;
    if (valor5 == null || valor5.length == 0 || /^\s+$/.test(valor5)) {
        alert('[ERROR] El campo Nro de contacto no puede quedar vacío');
        return false;
    }
    var opcion = document.getElementsByName("pago");
    var seleccion = false;
    for (var i = 0; i < opcion.length; i++) {
        if (opcion[i].checked) {
            seleccion = true;
            break;
        }
    }
    if (!seleccion) {
        alert('[ERROR] Selecciona una opción de Pago');
        return false;
    }
    // Si el script ha llegado a este punto, todas las condiciones se han cumplido, por lo que se devuelve el valor true
    return true;
}