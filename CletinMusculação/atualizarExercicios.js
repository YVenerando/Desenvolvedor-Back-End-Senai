const readline = require("readline-sync");
const fs = require("fs");

const atualizar = async (exerciciosGymLobao) => {
    const visualizar = require(`./visualizarExercicios`);
    const exercicios = await visualizar.objExer(exerciciosGymLobao);

    await visualizar.apresentarExercicios(exercicios);
    let qtd = exercicios.length;

    if (qtd >= 1) {
        let opcao = readline.questionInt("\nSelecione um exercicio para atualizar:");

        while (opcao < 1 || opcao > qtd + 1) {
            console.log("\nOPÇÃO INVALIDA!:");
            let opcao = readline.questionInt("\nSelecione um exercicio para atualizar:");
        }

        exercicios[opcao - 1].status = exercicios[opcao - 1].status === 0 ? 1 : 0;

        const exerciciosJSON = JSON.stringify(exercicios);

        try {
            fs.writeFileSync(exerciciosGymLobao, exerciciosJSON);
            console.log("\nExercicio atualizado com sucesso!");
        } catch (err) {
            console; error('\nErro ao atualizar o exercicio:', err);
        }
    }
}

module.exports = atualizar;