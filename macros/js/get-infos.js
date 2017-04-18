var botaoCalcula = document.querySelector('#btn-calcular');
botaoCalcula.addEventListener('click', function(e) {
    e.preventDefault();

    var form_infos = document.querySelector('#form-user-info');
    var form_factors = document.querySelector('#form-factors');
    var user = obterInfoUser(form_infos);
    var factor = obterInfoGKg(form_factors);
    var options = document.querySelectorAll('option:checked');

    if (options[0].innerHTML == "Homem")
        var sexo = 0;
    else
        var sexo = 1;

    if (options[1].innerHTML == "Com % de gordura")
        var tipo = 0;
    else {
        var tipo = 1;
        user.gordura = 1;
    }

    var errosU = validaUser(user);
    var errosF = validaFac(factor);
    if (errosU.length > 0) {
        exibeMsgErro(errosU);
        if (errosF.length > 0)
            exibeMsgErroF(errosF);
        return;
    }

    addUserTabela(user, factor, sexo, tipo);

    form_infos.reset();
    form_factors.reset();
    var msgErro = document.querySelector('#mensagem-erro');
    msgErro.innerHTML = "";

});

function obterInfoUser(form) {
    var user = {
        nome: form.nome.value,
        idade: form.idade.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }

    return user;
}

function obterInfoGKg(form) {
    var factor = {
        gordura: form.gorduraporkilo.value,
        proteina: form.proteinaporkilo.value,
        defcit: form.defcit.value,
        tempo: form.tempoatv.value
    }

    return factor;
}

function validaUser(user) {
    var erros = [];
    if ((user.idade <= 0) || (user.idade >= 100))
        erros.push("Idade Inválida!");
    if ((user.peso <= 0) || (user.peso >= 300))
        erros.push("Peso Inválido!");
    if ((user.altura <= 0) || (user.altura >= 300))
        erros.push("Altura Inválida!");
    if ((user.gordura <= 0) || (user.gordura > 100))
        erros.push("Percentual de Gordura Inválida!");

    return erros;
}

function validaFac(factor){
    var erros = [];

    if ((factor.gordura <= 0) || (factor.gordura == ``))
        erros.push("Gordura(g/Kg) Inválido!");
    if ((factor.proteina <= 0) || (factor.proteina == ``))
        erros.push("Proteina(g/Kg) Inválido!");
    if (factor.defcit == ``)
        erros.push("Preencher Defcit Calorico!");
    if ((factor.tempo <= 0) || (factor.tempo == ``))
        erros.push("Tempo de Atividade Inválido!");

    return erros;
}

function exibeMsgErro(erros) {
    var ul = document.querySelector('#mensagem-erro-user');
    ul.innerHTML = "";
    var li = null;
    erros.forEach(function(erro) {
        li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function exibeMsgErroF(erros) {
    var ul = document.querySelector('#mensagem-erro-factor');
    ul.innerHTML = "";
    var li = null;
    erros.forEach(function(erro) {
        li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}
