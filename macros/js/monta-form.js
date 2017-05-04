function addUserTabela(user, factor, sexo, tipo) {
    var gorduraTr = montaTr("Gordura", calculaGordura(user.peso, factor.gordura));

    var proteinaTr = montaTr("Proteina", calculaProteina(user.peso, factor.proteina));

    var grama_carbo = calculaCarbo(user, factor, sexo, tipo).toFixed(2);
    var carboidratoTr = montaTr("Carboidrato", grama_carbo);

    var grama_fibra = calculaFibra(user, factor, sexo, tipo).toFixed(2);
    var fibraTr = montaTr("Fibra", grama_fibra)

    var tabela_macro = document.getElementById('tabela-macros');
    tabela_macro.appendChild(gorduraTr);
    tabela_macro.appendChild(proteinaTr);
    tabela_macro.appendChild(carboidratoTr);
    tabela_macro.appendChild(fibraTr);

    var daily_cal = calculaCalDiaria(user, factor, sexo, tipo);
    var tabela_calorias = document.getElementById('tabela-calorias');
    tabela_calorias.appendChild(montaTr(((daily_cal - factor.defcit) * 7).toFixed(2), (daily_cal - factor.defcit).toFixed(2)));

}

function montaTr(macro_name, macro_grama) {
    var macroTr = document.createElement('tr');
    macroTr.classList.add('macro');

    macroTr.appendChild(montaTd(macro_name, "nomemacro"));
    macroTr.appendChild(montaTd(macro_grama, "seg"));
    macroTr.appendChild(montaTd(macro_grama, "ter"));
    macroTr.appendChild(montaTd(macro_grama, "qua"));
    macroTr.appendChild(montaTd(macro_grama, "qui"));
    macroTr.appendChild(montaTd(macro_grama, "sex"));
    macroTr.appendChild(montaTd(macro_grama, "sab"));
    macroTr.appendChild(montaTd(macro_grama, "dom"));

    return macroTr;
}

function montaTd(dado, classe) {
    var newTd = document.createElement('td');
    newTd.classList.add(classe);
    newTd.textContent = dado;

    return newTd;
}
