let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];
const inputEncriptar = document.getElementById("input__encriptar");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const imgVacio = document.getElementById("imgVacio");
const textoFinal = document.getElementById("textoFinal");
const textoInfo = document.getElementById("textoInfo");
const btnCopiar = document.getElementById("btnCopiar");

function normalizarTexto(texto) {
    return texto.toLowerCase()
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, ''); 
}

document.getElementById('input__encriptar').addEventListener('input', function() {
    this.value = normalizarTexto(this.value);
});
// ENCRIPTAR
btnEncriptar.addEventListener('click', () => {
    const texto = inputEncriptar.value.toLowerCase();

    if (texto != "") {
        function encriptar(newtext) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][0])) {
                    newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
                }
            }
            return newtext;
        }
        const textoEncriptado = encriptar(texto);
        textoFinal.innerHTML = textoEncriptado;
        imgVacio.classList.add("ocultar");
        textoInfo.classList.add("ocultar");
        btnCopiar.classList.remove("btn__ocultar");
        textoFinal.classList.add("ajustar");
    }
    function mostrarAlertaEncriptar() {
        var alerta = document.getElementById('alerta__encriptar');
        alerta.style.visibility = 'visible';
        setTimeout(function() {
            alerta.style.visibility = 'hidden';
        }, 3000);
    }
    mostrarAlertaEncriptar();
    
});
// DESENCRIPTAR
btnDesencriptar.addEventListener('click', () => {
    const texto = inputEncriptar.value.toLowerCase();
    
    if (texto != "") {
        function desencript(newtext) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][1])) {
                    newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
                }
            }
            return newtext;
        }
        const textoDesencriptado = desencript(texto);
        textoFinal.innerHTML = textoDesencriptado;
        imgVacio.classList.add("ocultar");
        textoInfo.classList.add("ocultar");
        btnCopiar.classList.remove("btn__ocultar");
        textoFinal.classList.add("ajustar");
    }
    function mostrarAlertaDesencriptar() {
        var alerta = document.getElementById('alerta__desencriptar');
        alerta.style.visibility = 'visible';
        setTimeout(function() {
            alerta.style.visibility = 'hidden';
        }, 3000);
    }
    mostrarAlertaDesencriptar();
});
// COPIAR
btnCopiar.addEventListener("click", () => {
    textoFinal.select();
    document.execCommand('copy');
    function mostrarAlerta() {
        var alerta = document.getElementById('alerta');
        alerta.style.visibility = 'visible';
        setTimeout(function() {
        alerta.style.visibility = 'hidden';
        }, 3000);
        inputEncriptar.value = '';
    }
    mostrarAlerta();
});

inputEncriptar.addEventListener("input", () => {
    inputEncriptar.style.height = "auto";
    let scHeight = inputEncriptar.scrollHeight;
    inputEncriptar.style.height = `${scHeight}px`;
});
