let nota = 49;
let resultado;

if(nota < 0 || nota > 100){
    console.log("Essa nota não é válida. Digite uma nota entre 0 e 100");
}
else {
    if(nota >= 90){
        resultado = "A"
    }
    else if(nota >= 80){
        resultado = "B"
    }
    else if(nota >= 70){
        resultado = "C"
    }
    else if(nota >= 60){
        resultado = "D"
    }
    else if (nota >= 50){
        resultado = "E"
    }
    else if (nota < 50){
        resultado = "F"
    }
}

console.log(nota);
console.log(resultado);