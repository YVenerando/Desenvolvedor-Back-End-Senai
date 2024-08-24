const readline = require("readline-sync");
const fs = require("fs");

const adicionarExercicios = async (exerciciosGymLobao, listaExercicios) => {

    let exercicios = await listaExercicios;

    let qtdExercicios = exercicios.length + 1;

    let novoExercicios = {
        id: qtdExercicios,
        nome: readline.question('\nQual é o exercicios:'),
        data: readline.question('\nQuantidade de repetições para fazer em cada exercicio:'),
        status: 0 // 0 define atividade não concluída
    }

    exercicios.push(novoExercicios);

    const exercicioJSON = JSON.stringify(exercicios);

    try {
        fs.writeFileSync(exerciciosGymLobao, exercicioJSON);
        console.log('\nExercicio adicionado com sucesso!');
    } catch (err) {
        console.error("\nErro ao adicionar o exercicio:", err);
    }

}

module.exports = adicionarExercicios;