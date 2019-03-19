var titulo = document.querySelector("h1");
titulo.textContent = "Apareida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

//percorre um array de pacientes
for(var i = 0; i < pacientes.length; i++){ 
   
    //pega o array de pacientes e guarda na variável paciente
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = calcula_imc(peso,altura);
        tdImc.textContent = imc; 
    }
}

function calcula_imc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); //Dermina o número de casas decimais

}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.0){
        return true;
    } else {
        return false;
    }
}




