/*
 * ========================================
 * 1) CRIAÇÃO DA ABSTRAÇÃO (CLASSE PAI)
 * ========================================
 */

/**
 * Abstração de um Veículo.
 * Esta classe serve como base (pai) para outros tipos de veículos.
 * Ela contém os atributos e métodos que todos os veículos compartilham.
 */
class Veiculo {
    constructor(marca, modelo, ano) {
        if (new.target === Veiculo) {
            throw new Error("Não é possível instanciar a classe abstrata 'Veiculo' diretamente.");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método que será compartilhado por todas as classes filhas
    ligar() {
        console.log(`O veículo ${this.modelo} está ligando o motor.`);
    }

    // Método que será compartilhado por todas as classes filhas
    desligar() {
        console.log(`O veículo ${this.modelo} está desligando o motor.`);
    }

    // Método "abstrato" (feito para ser sobrescrito pelas classes filhas)
    obterDetalhes() {
        throw new Error("O método 'obterDetalhes()' deve ser implementado pela classe filha.");
    }
}

/*
 * ========================================
 * 2) CRIAÇÃO DAS CLASSES HERDEIRAS (FILHAS)
 * ========================================
 */

/**
 * Classe 'Carro' que herda de 'Veiculo'.
 * Ela usa a palavra-chave 'extends' para herdar
 * e 'super()' para chamar o construtor da classe pai.
 */
class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroDePortas) {
        // 'super' chama o construtor da classe Pai (Veiculo)
        super(marca, modelo, ano);

        // Atributo específico do Carro
        this.numeroDePortas = numeroDePortas;
    }

    // Sobrescrevendo o método obrigatório da classe pai (Polimorfismo)
    obterDetalhes() {
        console.log(`Carro: ${this.marca} ${this.modelo} | Ano: ${this.ano} | Portas: ${this.numeroDePortas}`);
    }

    // Método específico do Carro
    abrirPortaMalas() {
        console.log(`O porta-malas do ${this.modelo} foi aberto.`);
    }
}

/**
 * Classe 'Moto' que também herda de 'Veiculo'.
 */
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        // Chama o construtor de Veiculo
        super(marca, modelo, ano);

        // Atributo específico da Moto
        this.cilindradas = cilindradas;
    }

    // Sobrescrevendo o método obrigatório
    obterDetalhes() {
        console.log(`Moto: ${this.marca} ${this.modelo} | Ano: ${this.ano} | CC: ${this.cilindradas}`);
    }

    // Método específico da Moto
    empinar() {
        console.log(`A ${this.modelo} está empinando!`);
    }
}

/*
 * ========================================
 * 3) CRIAÇÃO DAS INSTÂNCIAS (OBJETOS)
 * ========================================
 */

console.log("--- Criando Instâncias ---");

// Instância 1 (da classe Carro)
const meuCelta = new Carro('Chevrolet', 'Celta', 2010, 2);

// Instância 2 (da classe Moto)
const minhaXJ6 = new Moto('Yamaha', 'XJ6', 2015, 600);

// Instância 3 (da classe Carro)
const meuGol = new Carro('Volkswagen', 'Gol', 2020, 4);

console.log("\n--- Testando Métodos ---");

// Testando a Instância 1
meuCelta.obterDetalhes();
meuCelta.ligar();
meuCelta.abrirPortaMalas();

console.log("---");

// Testando a Instância 2
minhaXJ6.obterDetalhes();
minhaXJ6.ligar();
minhaXJ6.empinar();

console.log("---");

// Testando a Instância 3
meuGol.obterDetalhes();
meuGol.desligar();