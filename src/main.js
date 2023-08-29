const pin = Math.floor(Math.random()*10000)
const pinMaior = pin + 500;
const pinMenor = pin - 500;
let alerta = "Adivinhe o número de no mínimo 4 dígitos:"
let palpite

function verificarInput(input){
    const regexInput = /^[0-9]{4,}$/.test(input);
    (!regexInput ? alerta = "O valor inserido deve ser um número de no mínimo quatro digitos." :
    verificarNumero(palpite));
}

function verificarNumero(palpitePin){
    if (palpitePin == pin) {
        alert("Parabéns, você acertou!");
    } else if (palpitePin > pinMaior) {
        alerta = "O número esperado é muito menor que seu palpite.";
    } else if (palpitePin > pin) {
        alerta = "O número esperado é menor que seu palpite.";
    } else if (palpitePin < pinMenor) {
        alerta = "O número esperado é muito maior que seu palpite.";
    } else if (palpitePin < pin) {
        alerta = "O número esperado é maior que seu palpite.";
    }
}

while (palpite != pin) {
    palpite = prompt(alerta);
    verificarInput(palpite);
}