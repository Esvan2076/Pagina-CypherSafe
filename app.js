
function Encriptar() {
    var textoOriginal = document.getElementById('texto-editable').innerText;
    var textoEncriptado = "";
    
    for (var i = 0; i < textoOriginal.length; i++) {
        var num = textoOriginal.charCodeAt(i);
        if (i % 2 == 0) {
            num *= 2;
        } else {
            num *= 3;
        }
        textoEncriptado += '-' + num;
    }
    
    document.getElementById('texto-no-editable').innerText = textoEncriptado;
    return;
}

function Desencriptar() {
    var textoEncriptado = document.getElementById('texto-editable').innerText;
    var tam = textoEncriptado.length;
    var cadD = "";
    var helper = "";
    var num, h, j = -1;
    var caracter;
    for (var i = 0; i < tam; i++) {
        helper = "";
        if (textoEncriptado[i] == '-') {
            j++;
            h = i + 3;
            if (h >= tam) {
                break;
            }
            for (var k = i + 1; k <= h; k++) {
                if (isNaN(parseInt(textoEncriptado[k]))) {
                    break;
                }
                helper += textoEncriptado[k];
            }
            num = parseInt(helper);
            if (j % 2 == 0) {
                num = num / 2;
            } else {
                num = num / 3;
            }
            caracter = String.fromCharCode(num);
            cadD += caracter;
        }
    }
    document.getElementById('texto-no-editable').innerText = cadD;
    return;
}

function Copiar() {
    var textoACopiar = document.getElementById("texto-no-editable").innerText;

    // Crear un elemento textarea temporal para copiar el texto
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoACopiar;
    document.body.appendChild(elementoTemporal);

    // Seleccionar y copiar el texto al portapapeles
    elementoTemporal.select();
    document.execCommand("copy");

    // Eliminar el elemento temporal
    document.body.removeChild(elementoTemporal);

    // Mostrar algún mensaje o realizar otras acciones si es necesario
    alert("¡Texto copiado al portapapeles!");
    return;
}
