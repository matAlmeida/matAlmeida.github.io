var botaoAdd = document.querySelector('#adicionar-paciente');
botaoAdd.addEventListener('click', function(e)
{
    e.preventDefault();

    var form = document.querySelector('#form-adicionar');
    var paciente = obterInfoForm(form);

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMsgErro(erros);
        return;
    }

    addPacienteTabela(paciente);

    form.reset();
    var msgErro = document.querySelector('#mensagem-erro');
    msgErro.innerHTML = "";

});

function addPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.getElementById('tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function obterInfoForm(form)
{
    var paciente =
    {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
        classe: classificar(calculaImc(form.peso.value, form.altura.value))
    }

    return paciente;
}

function montaTr(paciente)
{
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(montaTd(paciente.classe, "info-classe"));

    return pacienteTr;
}

function montaTd(dado, classe)
{
    var newTd = document.createElement('td');
    newTd.classList.add(classe);
    newTd.textContent = dado;

    return newTd;
}

function validaPaciente(paciente){
    var erros = [];
    if(!validaPeso(paciente.peso))
        erros.push("Peso Inválido!");
    if(!validaAltura(paciente.altura))
        erros.push("Altura Inválida!");
    if(!validaGordura(paciente.gordura))
        erros.push("Gordura Inválida!");
    if(paciente.nome.length == 0)
        erros.push("Nome Vazio!");
    if(paciente.peso.length == 0)
        erros.push("Peso Vazio!");
    if(paciente.altura.length == 0)
        erros.push("Altura Vazio!");
    if(paciente.gordura.length == 0)
        erros.push("Gordura Vazio!");

    return erros;
}

function exibeMsgErro(erros){
    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = "";
    var li = null;
    erros.forEach(function(erro){
        li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}
