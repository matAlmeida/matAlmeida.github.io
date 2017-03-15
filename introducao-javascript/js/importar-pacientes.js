var importarPacientes = document.querySelector('#importar-pacientes');

importarPacientes.addEventListener('click', function(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');
    xhr.addEventListener('load', function(){
        if(xhr.status == 200){
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente){
                paciente['classe'] = classificar(paciente.imc);
                addPacienteTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            alert('Erro ' + xhr.status);
        }
    });
    xhr.send();
});

var xfile = new XMLHttpRequest();
xfile.open('GET', 'filename.json');
xfile.addEventListener('load', function(){
    console.log(xfile.responseText);
});
xfile.send();
// function saveText(text, filename){
//     var a = document.createElement('a');
//     a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(text));
//     a.setAttribute('download', filename);
//     a.click();
// }
//
// var obj = {a: "Hello", b: "World"};
// saveText( JSON.stringify(obj), "filename.json" );
