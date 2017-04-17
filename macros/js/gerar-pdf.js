var botaoPDF = document.querySelector('#btn-gerarPDF');
botaoPDF.addEventListener('click', function(e) {
    e.preventDefault();

    var tabela = document.getElementById('tabela-macros');

    var columns = ["Nutrientes (g)", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
    var rows = [];

    for (i = 0; i < tabela.rows.length; i++) {
        var linha = [];
        var row = tabela.rows[i];
        linha.push(row.querySelector('.nomemacro').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);

        rows.push(linha);
    }

    var doc = new jsPDF();
    doc.autoTable(columns, rows);
    doc.save('meus_macros.pdf');

});