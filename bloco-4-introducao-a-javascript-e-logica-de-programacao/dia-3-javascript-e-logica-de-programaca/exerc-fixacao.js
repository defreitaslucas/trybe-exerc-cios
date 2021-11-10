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



let n = 5;
let espacoLinha = "";
let posicao = n;

for(let linha = 0; linha < n; linha += 1){
    for(let coluna = 0; coluna <= n ; coluna+= 1){
        if(coluna < posicao){
            espacoLinha += " ";
        } else {
            espacoLinha += "*";
        }
    }
    console.log(espacoLinha);
    espacoLinha = ""
    posicao -=1;
}

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };