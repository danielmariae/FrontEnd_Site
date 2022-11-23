var pacientes = document.querySelectorAll(".calcPacientes");

for(var i=0; i<pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var pesovalido = true;
    var alturavalida = true;

    if(peso < 0 || peso > 500){
        pesovalido = false;
    }

    if(altura < 0 || altura > 4){
        alturavalida = false;
    }

    if(pesovalido == true && alturavalida == true){
        var imc = peso/(altura*altura);

        var tdImc = paciente.querySelector(".imc");
        tdImc.textContent = imc.toFixed(2);
    } 

}