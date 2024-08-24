const readline = require("readline-sync");
const fs = require("fs");

const exerciciosGymLobao = './listaExercicios.json';

const adicionarExercicios = require('./adicionarExercicios.js');
const visualizarExercicios = require('./visualizarExercicios.js');
const atualizar = require('./atualizarExercicios.js');
const excluir = require('./excluirExercicios.js');

const criarArquivoSeNaoExiste = async (exerciciosGymLobao) => {
    if (!fs.existsSync(exerciciosGymLobao)) { //Conferir se o arquivo realmente existe
        try {
            fs.writeFileSync(exerciciosGymLobao, "[]");
            console.log("Arquivo criado com sucesso")
        } catch (err) {
            console.error("\nErro ao criar o arquivo:", err);
        }
    }
}


const exibirMenuDeExercicios = async () => {
    console.log("--------------------------------");
    const opcao = readline.questionInt(" 1- Adicionar Exercicios:\n 2- Visualizar Exercicios:\n 3- Atualizar Exercicios:\n 4- Excluir Exercicios:\n 5- Sair:\n Escolha uma opção:");
    console.log("--------------------------------");

    switch (opcao) {
        case 1:
            await adicionarExercicios(exerciciosGymLobao, visualizarExercicios.objExer(exerciciosGymLobao));
            break;
        case 2:
            await visualizarExercicios.apresentarExercicios(visualizarExercicios.objExer(exerciciosGymLobao));
            break;
        case 3:
            await atualizar(exerciciosGymLobao);
            break;
        case 4:
            await excluir(exerciciosGymLobao);
            break;
        case 5:
            return false;
            break;
        default:
            console.log("\nOpção inválida!");
    }
    return true;
};

const executarMenuPrincipal = async () => {
    let continuar = true;
    while (continuar) {
        continuar = await exibirMenuDeExercicios();
    }
}

const main = async () => {
    await criarArquivoSeNaoExiste(exerciciosGymLobao);
    await executarMenuPrincipal();
}

main();