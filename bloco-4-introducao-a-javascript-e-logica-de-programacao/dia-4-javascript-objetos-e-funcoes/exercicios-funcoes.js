//exercicio função 1
// function verificaPalindromo(string){
//     let inverso = string.split('').reverse().join('');
    
//     if(inverso === string){
//         return 'true'
//     }
//     else {
//         return 'false'
//     }
// }

// console.log(verificaPalindromo('queijo'))

//exercicio função 2
// function maiorValor(arr){
//     console.log(arr)
//     let maior = 0;
//     for(let index in arr){
//         if(arr[maior] < arr[index]){
//             maior = index;
//         }
//     }
//     return maior
// }
// console.log(maiorValor([2,4,6,7,10,1]))

//exercicio função 3
function menorValor(arr){
    console.log(arr);
    let menor = 0;
    for(let index in arr){
        if(arr[index] < arr[menor]){
            menor = index
        }
    }
    return menor;
}
console.log(menorValor([2,4,6,7,10,0,-3]))