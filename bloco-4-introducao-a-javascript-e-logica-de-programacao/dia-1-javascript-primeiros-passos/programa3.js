// Exercicio 3
const num1 = 100;
const num2 = 250;
const num3 = 150;
let maior;

if (num1 > num2 && num1 > num3){
    maior = num1;
}
else if (num2 > num1 && num2 > num3) {
    maior = num2;
}
else {
    maior = num3;
}
console.log(maior)