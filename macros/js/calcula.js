function calculaTMB(peso, gordura) {
    return 370 + (21.6 * (peso - (peso * (gordura / 100))));
}

function calculaCalDiaria(user, factor) {
    var tmb = calculaTMB(user.peso, user.gordura);
    return tmb + (0.086 * factor.tempo * user.peso);
}

function calculaGordura(peso, facGordura) {
    return facGordura * peso;
}

function calculaProteina(peso, facProteina) {
    return facProteina * peso;
}

function calculaFibra(calDiaria, defcit) {
    return ((calDiaria - defcit) / 1000) * 15;
}

function calculaCarbo(user, factor) {
    var calRestante = (calculaCalDiaria(user, factor) - factor.defcit);
    var calGordura = (calculaGordura(user.peso, factor.gordura) * 9);
    var calProtein = (calculaProteina(user.peso, factor.proteina) * 4);
    return (calRestante - (calGordura + calProtein)) / 4;
}