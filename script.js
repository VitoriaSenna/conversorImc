function calcularIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    if (altura > 0 && peso > 0) {
        var imc = peso / ((altura / 100) * (altura / 100));
        var mensagem = "";

        if (imc < 18.5) {
            mensagem = "Abaixo do peso";
        } else if (imc < 24.9) {
            mensagem = "Peso normal";
        } else if (imc < 29.9) {
            mensagem = "Sobrepeso";
        } else {
            mensagem = "Obeso";
        }

        document.getElementById("resultado").innerText = "Seu IMC é " + imc.toFixed(2) + ". " + mensagem + ".";
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
    }
}