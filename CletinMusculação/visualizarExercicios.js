const readline = require("readline-sync");
const fs = require("fs");

const controller = {

    objExer: async (exerciciosGymLobao) => {
        try {

            const conteudo = fs.readFileSync(exerciciosGymLobao, 'utf-8');

            const exercicios = JSON.parse(conteudo);
            return exercicios;

        } catch (err) {
            console.error('\nErro ao processar os exercicios:', err);
        }
    },


    apresentarExercicios: async (objExer) => { // o parâmetro ojbtarefas é o objeto que contém as tarefas
        const exercicios = await objExer;

        let qtd = exercicios.length;

        if (qtd >= 1) {
            let status = '';

            for (let i = 0; i <= qtd - 1; i++) {
                status = exercicios[i].status === 0 ? "Não foi concluída" : "Concluída";

                console.log(`\n${i + 1}- ${exercicios[i].nome} | DATA PARA CONCLUSÃO: ${exercicios[i].data} | ${status}`);
            }
        } else {

            console.log("\nNão há exercicios cadastrados!,");
        }
    }
}

module.exports = controller;