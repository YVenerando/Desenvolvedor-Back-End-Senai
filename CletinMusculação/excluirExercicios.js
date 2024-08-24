const readline = require("readline-sync");
const fs = require("fs");

const excluir = async (exerciciosGymLobao) => {
    const visualizar = require(`./visualizarExercicios`);
    const exercicios = await visualizar.objExer(exerciciosGymLobao);

    await visualizar.apresentarExercicios(exercicios);
    let qtd = exercicios.length;

    if (qtd >= 1) {
        let opcao = readline.questionInt("\nSelecione um exercicio para excluir:");

        while (opcao < 1 || opcao > qtd + 1) {
            console.log("\nOPÇÃO INVALIDA!:");
            let opcao = readline.questionInt("\nSelecione uma exercicio para excluir:");
        }

        exercicios.splice(opcao - 1, 1);

        const exercicioJSON = JSON.stringify(exercicios.filter(Boolean));

        try {
            fs.writeFileSync(exerciciosGymLobao, exercicioJSON);
            console.log("\nExercicio excluido com sucesso!");
        } catch (err) {
            console; error('\nErro ao excluir o exercicio:', err);
        }
    }
}

module.exports = excluir;