const readline = require('readline-sync');

const velocidadeMedia = (distancia, tempo) => {
  const resultado = distancia / tempo;
  return resultado;
}

function main(){
  const distancia = readline.questionInt('Digite a distância em metros: ');
  const tempo = readline.questionInt('Digite o tempo em segundos: ');

  const resultado = velocidadeMedia();
  console.log(resultado);

  console.log(`A velocidade média do carro é: ${resultado.toFixed(2)}`);
}
main();