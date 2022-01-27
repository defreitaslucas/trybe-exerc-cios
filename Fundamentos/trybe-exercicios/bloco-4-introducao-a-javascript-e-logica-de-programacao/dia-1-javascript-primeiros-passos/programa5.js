//declaração de variavel
const a = 60;
const b = 60;
const c = -60;

let triangulo;
let resultado;

//condição para saber se algum angulo é negativo
if(a > 0 && b > 0 && c > 0){
    //faz a soma aritmetica para saber se da 180
    triangulo = a + b + c;
    //condição para saber se a soma da 180 para atribuir true ou false
    if (triangulo == 180){
        resultado = true;
    }
    else {
        resultado = false;
    }
} else {
    resultado = "Angulo inválido";
}

//imprimi na tela
console.log(resultado, triangulo)
