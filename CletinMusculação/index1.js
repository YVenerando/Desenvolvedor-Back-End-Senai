const readline = require("readline-sync");
const fs = require("fs");

try {
    fs.writeFileSync('./lista-exercicios.txt', 'Academia Lobao!');
    console.log("\nArquivo criado e salvo com sucesso!");
} catch (err) {
    console.error('\nErro ao escrever no arquivo:', err);
    return;
}

let conteudo = "";

try {
    conteudo = fs.readFileSync('./lista-exercicios.txt', 'utf8');
    console.log("\nConteúdo do arquivo:", conteudo);
} catch (err) {
    console.error('\nErro ao ler o arquivo:', err);
    return;
}
