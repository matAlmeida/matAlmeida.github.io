var botaoPDF = document.querySelector('#btn-gerarPDF');
botaoPDF.addEventListener('click', function(e) {
    e.preventDefault();

    var tabela_macro = document.getElementById('tabela-macros');
    var tabela_calorias = document.getElementById('tabela-calorias');


    var columns_macro = ["Nutrientes (g)", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
    var rows_macro = [];

    for (i = 0; i < tabela_macro.rows.length; i++) {
        var linha = [];
        var row = tabela_macro.rows[i];
        linha.push(row.querySelector('.nomemacro').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);

        rows_macro.push(linha);
    }

    var columns_calorias = ["Caloria total da Semana", "Caloria total diaria"];
    var rows_calorias = [];

    for (i = 0; i < tabela_calorias.rows.length; i++) {
        var linha = [];
        var row = tabela_calorias.rows[i];
        linha.push(row.querySelector('.nomemacro').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);
        linha.push(seg = row.querySelector('.seg').innerHTML);

        rows_calorias.push(linha);
    }

    var doc = new jsPDF();
    doc.autoTable(columns_macro, rows_macro);

    doc.autoTable(columns_calorias, rows_calorias, {
        startY: doc.autoTable.previous.finalY + 10,
        pageBreak: 'avoid',
        theme: 'grid',
    });

    doc.save('meus_macros.pdf');

});