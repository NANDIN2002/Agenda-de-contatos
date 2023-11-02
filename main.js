function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        var tabela = document.getElementById("tabelaContatos");
        var newRow = tabela.insertRow(tabela.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow