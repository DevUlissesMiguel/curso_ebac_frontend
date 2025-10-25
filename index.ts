/*
 * 1) Função de Multiplicação
 *
 * Recebe dois argumentos do tipo 'number'
 * Retorna um valor do tipo 'number'
 */
function multiplicacao(a: number, b: number): number {
    return a * b;
}

/*
 * 2) Função de Saudação
 *
 * Recebe um argumento do tipo 'string'
 * Retorna um valor do tipo 'string'
 */
function saudacao(nome: string): string {
    return `Olá ${nome}`;
}


// --- Exemplos de Uso ---

// Usando a função de multiplicação corretamente
const resultadoMultiplicacao = multiplicacao(10, 5);
console.log(`O resultado da multiplicação é: ${resultadoMultiplicacao}`);

// Usando a função de saudação corretamente
const mensagemSaudacao = saudacao("Mundo");
console.log(mensagemSaudacao);


/* * --- Exemplos de Erros (que o TypeScript evitaria) ---
 *
 * O código abaixo causaria um erro de compilação no TypeScript
 * porque os tipos estão incorretos.
 */

// Erro: O argumento '10' não é do tipo 'string'.
// const erroSaudacao = saudacao(10);

// Erro: O argumento 'cinco' não é do tipo 'number'.
// const erroMultiplicacao = multiplicacao(10, 'cinco');