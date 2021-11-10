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

let symbol = '*'
let n = 5;
let resultado = "";

for(let lin = 0; lin < n; lin += 1){
    for(let col = 0; col < n; col += 1){
        resultado = resultado + " ";
    }
    
    console.log(resultado)
}