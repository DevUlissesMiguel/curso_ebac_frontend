<template>
  <div class="calculadora-container">
    <h1>Calculadora Aritmética VueJS</h1>
    
    <div class="campos">
      <div class="campo">
        <label for="numero1">Número 1:</label>
        <input type="number" id="numero1" v-model="numero1" placeholder="0">
      </div>
      
      <div class="campo">
        <label for="operacao">Operação:</label>
        <select id="operacao" v-model="operacao">
          <option value="soma">+</option>
          <option value="subtracao">-</option>
          <option value="multiplicacao">*</option>
          <option value="divisao">/</option>
        </select>
      </div>
      
      <div class="campo">
        <label for="numero2">Número 2:</label>
        <input type="number" id="numero2" v-model="numero2" placeholder="0">
      </div>
    </div>
    
    <div class="resultado">
      <h2>Resultado:</h2>
      <span>{{ resultado }}</span>
    </div>

  </div>
</template>

<script setup>
// Importamos 'ref' para criar variáveis reativas e 'computed' para o cálculo automático
import { ref, computed } from 'vue';

// --- Estado Reativo ---
// 1. Criamos as variáveis reativas para armazenar os valores dos inputs
// 'ref()' torna a variável reativa,
// o Vue "assiste" a ela para qualquer mudança.
const numero1 = ref(0);
const numero2 = ref(0);
const operacao = ref('soma'); // Define 'soma' como a operação padrão

// --- Propriedade Computada ---
// 2. Criamos uma propriedade computada para o resultado.
// Esta função será executada automaticamente sempre que
// 'numero1', 'numero2' ou 'operacao' mudarem.
const resultado = computed(() => {
  // Garantimos que os valores sejam números (parseFloat)
  // Se não for um número válido, usamos 0.
  const n1 = parseFloat(numero1.value) || 0;
  const n2 = parseFloat(numero2.value) || 0;

  // Um 'switch' para lidar com cada operação
  switch (operacao.value) {
    case 'soma':
      return n1 + n2;
    case 'subtracao':
      return n1 - n2;
    case 'multiplicacao':
      return n1 * n2;
    case 'divisao':
      // Tratamento de erro para divisão por zero
      if (n2 === 0) {
        return 'Divisão por zero!';
      }
      // Limita as casas decimais para um resultado mais limpo
      return (n1 / n2).toFixed(2);
    default:
      return 0;
  }
});
</script>

<style scoped>
.calculadora-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f4f7f6;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.campos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.campo {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

input[type="number"],
select {
  width: 100px;
  padding: 12px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
}

select {
  width: 70px; /* Um pouco menor para o operador */
}

.resultado {
  text-align: center;
  background-color: #e9ecef;
  padding: 20px;
  border-radius: 8px;
}

.resultado h2 {
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  color: #555;
  font-weight: normal;
}

.resultado span {
  font-size: 2.5rem;
  font-weight: bold;
  color: #007bff;
}
</style>