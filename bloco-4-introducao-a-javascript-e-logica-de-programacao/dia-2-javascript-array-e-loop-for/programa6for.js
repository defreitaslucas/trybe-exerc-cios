let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let eImpar = [];

for(let index = 0; index < numbers.length; index+= 1){
    if(numbers[index] % 2 !== 0){
        eImpar.push(numbers[index])
    }
}
if (eImpar == 0){
    console.log("nenhum valor ímpar encontrado")
}
else {
    console.log(eImpar.length);
    console.log(eImpar);
}
