let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiNumbers = [];

for (let index = 0; index < numbers.length; index+= 1){
    let aux;
    if(index >= numbers.length - 1){
        aux = numbers[index] * 2;
        multiNumbers.push(aux);
    }
    else {
        aux = numbers[index] * numbers[index+1];
        multiNumbers.push(aux);
    }
}
        
console.log(multiNumbers);