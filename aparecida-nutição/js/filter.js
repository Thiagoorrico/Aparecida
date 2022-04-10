var filter = document.querySelector("#filtrar-tabela");

filter.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".pacientes");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressison = new RegExp(this.value, "i");
            if (!expressison.test(nome)){
                paciente.classList.add("invisible");
            } else {
                paciente.classList.remove("invisible");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }
});