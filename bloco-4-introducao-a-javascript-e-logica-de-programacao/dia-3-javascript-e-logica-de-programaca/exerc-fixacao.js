//imprime 5 linhas com 5 colunas de asteriscos
// let n = 5;
// let asterisco = "";

// for(let coluna = 0; coluna < n ; coluna+= 1){
//         asterisco += "*";
// }
// for(let linha = 0; linha < n; linha += 1){
//     console.log(asterisco);
// }


//imprime piramide de asteriscos
// let n = 5;

// for(let linha = 0; linha < n; linha += 1){
//     let asterisco = ""
//     for(let coluna = 0; coluna <= linha ; coluna+= 1){
//         asterisco = asterisco + "*"
//     }
//     console.log(asterisco)
// }


// imprime piramide lado oposto
// let n = 5;
// let espacoLinha = "";
// let posicao = n;

// for(let linha = 0; linha < n; linha += 1){
//     for(let coluna = 0; coluna <= n ; coluna+= 1){
//         if(coluna < posicao){
//             espacoLinha += " ";
//         } else {
//             espacoLinha += "*";
//         }
//     }
//     console.log(espacoLinha);
//     espacoLinha = ""
//     posicao -=1;
// }

//exercicio 4
// let symbol = '*';
// let n = 5;
// let inputEspaco = "";
// let positionMeio = (n+1)/2;
// let positionMeioDir = positionMeio;
// let positionMeioEsq = positionMeio;


// for(let lin = 0; lin <= positionMeio; lin += 1){
//     for(let col = 0; col <= n; col += 1){
//         if(col > positionMeioEsq && col < positionMeioDir){
//             inputEspaco = inputEspaco + symbol
//         }
//         else {
//             inputEspaco = inputEspaco + " "
//         }
//     }
//     console.log(inputEspaco);
//     inputEspaco = " "
//     positionMeioDir += 1;
//     positionMeioEsq -= 1;
    
// }




let symbol = '*';
let n = 7;
let inputEspaco = "";
let positionMeio = (n+1)/2;
let positionMeioDir = positionMeio;
let positionMeioEsq = positionMeio;


for(let lin = 0; lin <= positionMeio; lin += 1){
    inputEspaco = "";
    for(let col = 0; col <= n; col += 1){
        if(col == positionMeioEsq || col == positionMeioDir || lin == positionMeio ){
            inputEspaco = inputEspaco + symbol;
        }
        else {
            inputEspaco = inputEspaco + " ";
        }
    }
    positionMeioDir += 1;
    positionMeioEsq -= 1;
    console.log(inputEspaco);    
}
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******