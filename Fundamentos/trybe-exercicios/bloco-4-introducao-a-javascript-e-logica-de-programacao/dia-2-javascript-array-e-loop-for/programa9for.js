let array = [];
let arrayDividido = [];

for(let i=1; i <= 25; i+=1){
    array.push(i)
}

for(let index = 0; index < array.length; index+= 1){
    arrayDividido.push(array[index]/2)
}

console.log(array);
console.log(arrayDividido);