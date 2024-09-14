const readline = require('readline-sync');

class Veiculo {
    marca;
    modelo;
    cor;

    constructor(marca, modelo, ano, cor, combustivel, velocidadeFinal, sensorPortasAbertas, sensorMotorLigado) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.combustivel = combustivel;
        this.velocidadeFinal = velocidadeFinal;
        this.sensorPortasAbertas = sensorPortasAbertas; // y para true \ n para false 
        this.sensorMotorLigado = false;
    }

    ligarMotor() {
        this.sensorMotorLigado = true;
        console.log('Motor ligado.');
    }

    desligarMotor() {
        this.sensorMotorLigado = true;
        console.log('Motor desligado.');
    }


    exibirInformacoes() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Combustível: ${this.combustivel}`); // Tipo de combustivel determinada pelo usuario, Gasolina, Etanol, Flex e podium
        console.log(`Velocidade Final: ${this.velocidadeFinal} km/h`); // Velocidade final determinada pelo usuario.
        console.log(`Sensor de Portas Abertas: ${this.sensorPortasAbertas ? 'Ativado' : 'Desativado'}`); // Sensor apenas para veiculos com portas
        console.log(`Motor Ligado: ${this.sensorMotorLigado}`);

    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor, combustivel, velocidadeFinal, sensorPortasAbertas, portas) {
        super(marca, modelo, ano, cor, combustivel, velocidadeFinal, sensorPortasAbertas);
        this.portas = portas;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Portas: ${this.portas}`);
    }

    cantarPneu() {
        if (this.sensorMotorLigado) {
            console.log('o carro está cantando pneu!');
        } else {
            console.log('O motor deve estar ligado para cantar pneu.');
        }
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cor, combustivel, velocidadeFinal, tipo) {
        super(marca, modelo, ano, cor, combustivel, velocidadeFinal);
        this.tipo = tipo;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Tipo: ${this.tipo}`);
    }

    empinar() {
        console.log(`${this.marca} ${this.modelo} está empinando! Whee!`); // ação de empinar a moto
    }
}

const veiculos = [];

function criarVeiculo() {
    const tipo = readline.question('Digite o tipo de veículo (Carro/Moto): ').toLowerCase();
    const marca = readline.question('Marca: ');
    const modelo = readline.question('Modelo: ');
    const ano = readline.questionInt('Ano: ');
    const cor = readline.question('Cor: ');
    const combustivel = readline.question('Combustível: ');
    const velocidadeFinal = readline.questionInt('Velocidade Final (km/h): ');
    const sensorPortasAbertas = readline.keyInYNStrict('Sensor de portas abertas ativado?');

    if (tipo === 'carro') {
        const portas = readline.questionInt('Número de portas: ');
        veiculos.push(new Carro(marca, modelo, ano, cor, combustivel, velocidadeFinal, sensorPortasAbertas, portas));
    } else if (tipo === 'moto') {
        const tipoMoto = readline.question('Tipo de moto (esportiva/cruiser/etc): ');
        veiculos.push(new Moto(marca, modelo, ano, cor, combustivel, velocidadeFinal, tipoMoto));
    } else {
        console.log('Tipo de veículo inválido.');
    }
}

// Função para exibir o menu de controle do motor
function controlarMotor() {
    const indice = readline.questionInt('Escolha o número do veículo para controlar o motor (1 para ligar, 2 para desligar): ') - 1;
    if (indice >= 0 && indice < veiculos.length) {
      const acao = readline.question('Deseja ligar ou desligar o motor? (ligar/desligar): ').toLowerCase();
      if (acao === 'ligar') {
        veiculos[indice].ligarMotor();
      } else if (acao === 'desligar') {
        veiculos[indice].desligarMotor();
      } else {
        console.log('Ação inválida!');
      }
    } else {
      console.log('Índice de veículo inválido!');
  }
}

function exibirVeiculos() {
    if (veiculos.length === 0) {
        console.log('Nenhum veículo cadastrado.');
        return;
    }

    veiculos.forEach((veiculo, index) => {
        console.log(`Veículo ${index + 1}:`);
        console.log('--------------------');
        veiculo.exibirInformacoes();
        console.log('--------------------');
    });
}

function executarAcao() {
    if (veiculos.length === 0) {
        console.log('Nenhum veículo cadastrado para realizar ações.');
        return;
    }

    const indice = readline.questionInt('Digite o numero do veiculo para realizar uma açao (1 para o primeiro, 2 para o segundo, etc.): ') - 1;

    if (indice < 0 || indice >= veiculos.length) {
        console.log('Número de veículo inválido.');
        return;
    }

    const veiculo = veiculos[indice];
    const tipo = veiculo instanceof Carro ? 'carro' : 'moto';

    if (tipo === 'carro') {
        console.log('--------------------');
        veiculo.cantarPneu();
        console.log('--------------------');
    } else if (tipo === 'moto') {
        console.log('--------------------');
        veiculo.empinar();
        console.log('--------------------');
    }
}

// Função principal
function main() {
    while (true) {
      console.log('\nMenu:');
      console.log('1. Criar Veículo');
      console.log('2. Exibir Veículos Cadastrados');
      console.log('3. Executar Ação');
      console.log('4. Controlar Motor');
      console.log('5. Sair');
  
      const opcao = readline.questionInt('Escolha uma opção: ');

        if (opcao === 1) {
            criarVeiculo();
        } else if (opcao === 2) {
            exibirVeiculos();
        } else if (opcao === 3) {
            executarAcao();
        } else if (opcao === 4) {
            controlarMotor();
        } else if (opcao === 5) {
            break;
        } else {
            console.log('Opção inválida.');
        }
    }
}

main();