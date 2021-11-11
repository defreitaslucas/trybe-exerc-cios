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
// function menorValor(arr){
//     console.log(arr);
//     let menor = 0;
//     for(let index in arr){
//         if(arr[index] < arr[menor]){
//             menor = index
//         }
//     }
//     return menor;
// }
// console.log(menorValor([2,4,6,7,10,0,-3]))

//exercicio função 4
//declaração da função
// function nomeMaior(nomes){
//     //starta a variavel com a primeira posição do array
//     let nomeMaior = nomes[0];
//     //cria a repetição
//     for (let index in nomes){
//         //o for na primeira repitição verifica se o a posição 0 e 0 são menores e assim vai sucessivamente crescendo o index
//         if(nomeMaior.length < nomes[index].length){
//             nomeMaior = nomes[index]
//         }
//     }
//     return nomeMaior;
// }
// console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//exercicio função 5
function maisRepete(numeros){
    let repete = null;
    let contador = 0;
    for (let index in numeros){
        if(repete !== numeros[index]){
            repete = numeros[index];
            contador += 1;
        }
        else{
            contador += 1;
        }
    }
    return repete;
}
console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]))