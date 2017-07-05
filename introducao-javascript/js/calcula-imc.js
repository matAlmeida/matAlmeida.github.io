var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista';

var clf = ["Magreza grave", "Magreza moderada",
           "Magreza leve", "Saudável",
           "Sobrepeso", "Obesidade Grau I",
           "Obesidade Grau II (severa)", "Obesidade Grau III (mórbida)"];


var pacientes = document.querySelectorAll('.paciente');
var qntPacientes = pacientes.length;

for(i = 0; i < qntPacientes; i++)
{
    var paciente = pacientes[i];
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var trClass = paciente.querySelector('.info-classe');
    var trImc = paciente.querySelector('.info-imc');
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido)
    {
        trImc.textContent = 'Peso inválido';
        trClass.textContent = 'Peso inválido';
        pesoValido = false;
        paciente.classList.add('paciente-invalido')
    }
    if(!alturaValida)
    {
        trImc.textContent = 'Altura inválida';
        trClass.textContent = 'Altura inválida';;
        alturaValido = false;
        paciente.classList.add('paciente-invalido')
    }

    if(!alturaValida)
    {
        trImc.textContent = 'Altura inválida';
        trClass.textContent = 'Altura inválida';;
        alturaValido = false;
        paciente.classList.add('paciente-invalido')
    }

    if(pesoValido && alturaValida)
    {
        trImc.textContent = calculaImc(peso, altura);
        trClass.textContent = classificar(trImc.textContent);
    }
}

function calculaImc(peso, altura){
    return (peso/(altura*altura)).toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso < 500)
        return true;
    else
        return false;
}

function validaAltura(altura){
    if (altura >= 0 && altura < 3.0)
        return true;
    else
        return false;
}

function validaGordura(gordura){
    if (gordura >= 0 && gordura < 70)
        return true;
    else
        return false;
}

// Classifica o imc do paciente
function classificar(imc){
    if( imc < 16)
        return clf[0];
    else if(imc < 17)
        return clf[1];
    else if(imc < 18.5)
        return clf[2];
    else if(imc < 25)
        return clf[3];
    else if(imc < 30)
        return clf[4];
    else if(imc < 35)
        return clf[5];
    else if(imc < 40)
        return clf[6];
    else
        return clf[7];
}
