var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){
    var pacientes = document.querySelectorAll('.paciente');

    if(this.value.length > 0){
        for(i =  0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var nome = paciente.querySelector('.info-nome').textContent;
            var expressao = new RegExp(this.value, 'i');

            if(!expressao.test(nome))
                paciente.classList.add('invisivel');
            else
                paciente.classList.remove('invisivel');
        }
    }
    else
        for(i = 0; i < pacientes.length; i++){
            pacientes[i].classList.remove('invisivel');
        }
});
