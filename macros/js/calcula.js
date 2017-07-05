function calculaTMB(peso, gordura) {
    return 370 + (21.6 * (peso - (peso * (gordura / 100))));
}

function calculaTMBMix(peso, altura, idade, sexo) {
    if (sexo == 0)
        return (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    else
        return (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
}

function calculaCalDiaria(user, factor, sexo, tipo) {
    if (tipo == 0)
        var tmb = calculaTMB(user.peso, user.gordura);
    else
        var tmb = calculaTMBMix(user.peso, user.altura, user.idade, sexo);

    return tmb + (0.086 * factor.tempo * user.peso);
}

function calculaGordura(peso, facGordura) {
    return facGordura * peso;
}

function calculaProteina(peso, facProteina) {
    return facProteina * peso;
}

function calculaFibra(user, factor, sexo, tipo) {
    var calDiaria = calculaCalDiaria(user, factor, sexo, tipo);
    return ((calDiaria - factor.defcit) / 1000) * 15;
}

function calculaCarbo(user, factor, sexo, tipo) {
    var calRestante = (calculaCalDiaria(user, factor, sexo, tipo) - factor.defcit);
    var calGordura = (calculaGordura(user.peso, factor.gordura) * 9);
    var calProtein = (calculaProteina(user.peso, factor.proteina) * 4);
    return (calRestante - (calGordura + calProtein)) / 4;
}