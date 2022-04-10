var searchbutton = document.querySelector("#buscar-paciente");

searchbutton.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var response = xhr.responseText;
            var pacientes = JSON.parse(response)
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    })
    xhr.send()
})