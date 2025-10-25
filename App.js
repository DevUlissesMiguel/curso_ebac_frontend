import React, { useState, useMemo } from 'react';

// Função auxiliar para obter a classificação do IMC
function getIMCClassification(imc) {
  if (imc < 18.5) return 'Magreza (Abaixo do peso)';
  if (imc <= 24.9) return 'Normal (Peso ideal)';
  if (imc <= 29.9) return 'Sobrepeso';
  if (imc <= 39.9) return 'Obesidade';
  return 'Obesidade Grave';
}

function App() {
  // 1) Criando os estados para os campos de altura e peso
  const [altura, setAltura] = useState(''); // Armazenado em cm
  const [peso, setPeso] = useState('');     // Armazenado em kg

  // 2) Calculando o IMC e a Classificação
  // Usamos 'useMemo' para que o cálculo só seja refeito
  // quando 'altura' ou 'peso' mudarem.
  const resultado = useMemo(() => {
    // Converte os valores de string (do input) para números
    const h = parseFloat(altura) / 100; // Convertendo altura de cm para metros
    const w = parseFloat(peso);

    // Validação de entrada
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      return { imc: null, classificacao: 'Preencha os campos com valores válidos.' };
    }

    // Fórmula do IMC: peso / (altura * altura)
    const imc = w / (h * h);
    const classificacao = getIMCClassification(imc);

    return {
      imc: imc.toFixed(2), // Arredonda para 2 casas decimais
      classificacao: classificacao
    };
  }, [altura, peso]); // O cálculo depende de 'altura' e 'peso'

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Calculadora de IMC</h1>

      {/* 1) Formulário com os campos altura e peso */}
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="altura">Altura (em cm):</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 175"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="peso">Peso (em kg):</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
            style={styles.input}
          />
        </div>
      </form>

      {/* 3) Retorno do IMC e da classificação */}
      <div style={styles.resultadoContainer}>
        {resultado.imc ? (
          // Se o cálculo foi bem-sucedido
          <>
            <h2 style={styles.imcValor}>Seu IMC: {resultado.imc}</h2>
            <h3 style={styles.imcClassificacao}>{resultado.classificacao}</h3>
          </>
        ) : (
          // Se houver erro ou os campos estiverem vazios
          <p style={styles.placeholder}>{resultado.classificacao}</p>
        )}
      </div>

      {/* Tabela de Classificação (Referência) */}
      <h4 style={{ marginTop: 40, textAlign: 'center' }}>Tabela de Classificação (OMS)</h4>
      <table style={styles.tabela}>
        <thead>
          <tr>
            <th>IMC</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo de 18.5</td>
            <td>Magreza</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>25.0 - 29.9</td>
            <td>Sobrepeso</td>
          </tr>
          <tr>
            <td>30.0 - 39.9</td>
            <td>Obesidade</td>
          </tr>
          <tr>
            <td>Acima de 40.0</td>
            <td>Obesidade Grave</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

// Estilos básicos (para não precisar de um arquivo .css separado)
const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    color: '#333'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '30px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  resultadoContainer: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#e6f7ff',
    borderRadius: '5px',
    textAlign: 'center'
  },
  imcValor: {
    margin: 0,
    color: '#0056b3'
  },
  imcClassificacao: {
    margin: '5px 0 0 0',
    color: '#333',
    fontWeight: 'normal'
  },
  placeholder: {
    margin: 0,
    color: '#555'
  },
  tabela: {
    width: '100%',
    marginTop: '10px',
    borderCollapse: 'collapse'
  }
};

export default App;