// 1) Criando o array de objetos (alunos)
const alunos = [
    { nome: 'Ana Silva', nota: 8.5 },
    { nome: 'Bruno Costa', nota: 4.2 },
    { nome: 'Carla Mendes', nota: 6.0 },
    { nome: 'Daniel Moreira', nota: 9.1 },
    { nome: 'Elisa Fernandes', nota: 5.8 },
    { nome: 'Fábio Guedes', nota: 7.3 }
];

/**
 * 2) Função que retorna apenas os alunos com nota maior ou igual a 6.
 *
 * @param {Array} arrayDeAlunos - O array original de alunos.
 * @returns {Array} - Um novo array contendo apenas os alunos aprovados.
 */
function filtrarAlunosAprovados(arrayDeAlunos) {
    // Usamos o método .filter() para criar um novo array
    // apenas com os elementos que passam no teste (retornam true).
    const alunosAprovados = arrayDeAlunos.filter(aluno => {
        return aluno.nota >= 6;
    });

    return alunosAprovados;
}

// --- Exemplo de uso ---

// Chamamos a função passando o nosso array de alunos
const alunosAprovados = filtrarAlunosAprovados(alunos);

// Exibe o resultado no console
console.log('Todos os Alunos:');
console.table(alunos);

console.log('\nAlunos Aprovados (Nota >= 6):');
console.table(alunosAprovados);