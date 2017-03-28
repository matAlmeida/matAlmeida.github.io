var db = openDatabase('mydb', '1.0', 'DB', 2 * 1024 * 1024);
var msg;
var idx;

db.transaction(function (tx) {
    var colunas = 'id unique, nome, peso, altura decimal(1,2), gcorp, imc, classe, PRIMARY KEY(id)';
    tx.executeSql('CREATE TABLE IF NOT EXISTS PATIENTS (' + colunas + ')');
    msg = 'Tabela criada ou já existe';
    console.log(msg);
});

readFromDb();

function addToDb(paciente)
{
    var id = idx + 1;
    var nome = paciente.nome;
    var peso = paciente.peso;
    var altura = paciente.altura;
    var gordura = paciente.gordura;
    var imc = paciente.imc;
    var classe = paciente.classe;
    var values = '' + id + ', "' + nome + '", ' + peso + ', ' + altura + ', ' + gordura + ', ' + imc + ', "' + classe + '"';
    var query = 'INSERT INTO PATIENTS VALUES (' + values + ')';

    db.transaction(function (tx) {
        tx.executeSql(query);
    });
}

function readFromDb()
{
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM PATIENTS', [], function (tx, results) {
            var len = results.rows.length, i;
            msg = "Found rows: " + len;

            for (i = 0; i < len; i++){
                var paciente = obterInfoDb(results, i);
                addPacienteTabela(paciente);
            }
            idx = i;
        }, null);
    });
}

function obterInfoDb(results, i)
{
    var paciente =
    {
        nome: results.rows.item(i).nome,
        peso: results.rows.item(i).peso,
        altura: results.rows.item(i).altura,
        gordura: results.rows.item(i).gcorp,
        imc: results.rows.item(i).imc,
        classe: results.rows.item(i).classe
    }
    return paciente;
}