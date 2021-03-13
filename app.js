let qrCodigo = select("img");
let qrTexto = select("textarea");
let qrBoton = select("button");

qrBoton.addEventListener("click", generadorQR);

function generadorQR(){
    let size = "1000x1000";
    let datos = qrTexto.value;
    let baseURL = "https://api.qrserver.com/v1/create-qr-code/";

    let url = `${baseURL}?data=${datos}&size=${size}`;

    qrCodigo.src = url;
}

function select (elemento){
    return document.querySelector(elemento);
}

