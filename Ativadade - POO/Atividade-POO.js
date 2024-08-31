const readline = require('readline');
const fs = require('fs');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Propriedades ou atributos -> variáveis ou características do nosso objeto
class Pessoa {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    // Método para calcular o IMC
    calcularIMC() {
        return this.peso / (this.altura ^ 2);
    }
}

// Função para coletar dados do usuário e calcular o IMC
function coletarDados() {
        rl.question('Digite o nome:\n ', (nome) => {
        rl.question('Digite a idade:\n ', (idade) => {
        rl.question('Digite o peso (em kg):\n ', (peso) => {
        rl.question('Digite a altura (em cm):\n ', (altura) => {
                const pessoa = new Pessoa(
                    nome,
                    parseInt(idade),
                    parseFloat(peso),
                    parseFloat(altura)
                );

                    const imc = pessoa.calcularIMC();
                    const resultado = `Olá, ${pessoa.nome}!\nSeu IMC é: ${imc.toFixed(2)}\n`;

                    // Exibe o resultado no terminal
                    console.log(resultado);

                    // Fecha a interface readline
                    rl.close();
                });
            });
        });
    });
};

// Inicia o processo de coleta de dados
coletarDados();