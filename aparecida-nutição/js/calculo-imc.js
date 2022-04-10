var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".pacientes");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var pesoValidado = validaPeso(peso);
    var alturaValidada = validaAltura(altura);

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;

    function calculaImc(peso, altura) {
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
    if (pesoValidado && alturaValidada) {
        var imc = calculaImc(peso, altura);
    }
    if (!validaPeso) {
        console.log("Peso inválido")
        pesoValidado = false
    }
    if (!validaAltura) {
        alturaValidada = false
    }
    function validaPeso(peso) {
        if (peso >= 0 || peso <= 200) {
            return true;
        }
    }
    function validaAltura(altura) {
        if (altura <= 0 || altura <= 3.00) {
            return true
        }
    }
}