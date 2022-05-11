const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? ');
const altura = readline.questionFloat('Qual a sua altura? ');

const imc = (peso, altura) => {
  return resultado = peso / Math.pow(altura, 2);
}

imc(peso, altura);

console.log(`O IMC é: ${resultado.toFixed(2)}`);

if (resultado < 18.5) {
  console.log('Abaixo do peso (magreza)');
}
else if (resultado < 24.9) {
  console.log('Peso normal');
}
else if (resultado < 34.9) {
  console.log('Obesidade grau I');
}
else if (resultado < 39.9) {
  console.log('Obesidade grau II');
}
else {
  console.log('Obesidade graus III e IV');
}