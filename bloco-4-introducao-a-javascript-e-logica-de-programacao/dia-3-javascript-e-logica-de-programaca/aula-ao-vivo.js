// 1. Faça um algoritmo que calcule a soma de 1 a 1000 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 1000 é: X.
​
//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
​
//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
​
//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
​
//5. Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
​
​//algoritimo 1
let sum = 0;
for(let index = 1; index <= 1000; index+= 1){
    sum = sum + index;
}
console.log("A soma de 1 a 1000 é: ", sum);

//algoritimo 2
let numbers = [];
for (let index = 2; index <= 150; index += 1){
    if(index % 3 == 0){
        numbers.push(index)
    }
}
if (numbers.length == 50){
    console.log("Mensagem Secreta")
}
console.log(numbers)
console.log(numbers.length)

//algoritimo 4
let idade = 20;

if (idade >= 18){
    console.log("Pessoa maior de idade.")
}
else {
    console.log("Pessoa menor de idade.")
}

//algoritimo 5
