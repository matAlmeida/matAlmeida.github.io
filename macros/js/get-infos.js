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

    var erros = validaUser(user);
    if (erros.length > 0) {
        exibeMsgErro(erros);
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
    var factors = {
        gordura: form.gorduraporkilo.value,
        proteina: form.proteinaporkilo.value,
        defcit: form.defcit.value,
        tempo: form.tempoatv.value
    }

    return factors;
}

function validaUser(user) {
    var erros = [];
    if ((user.idade <= 0) || (user.idade >= 100))
        erros.push("Idade Inválida!");
    if ((user.peso <= 0) || (user.peso >= 200))
        erros.push("Peso Inválido!");
    if ((user.altura <= 0) || (user.altura >= 300))
        erros.push("Altura Inválida!");
    if ((user.gordura <= 0) || (user.idade >= 100))
        erros.push("Percentual de Gordura Inválida!");

    return erros;
}

function exibeMsgErro(erros) {
    var ul = document.querySelector('#mensagem-erro');
    ul.innerHTML = "";
    var li = null;
    erros.forEach(function(erro) {
        li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}