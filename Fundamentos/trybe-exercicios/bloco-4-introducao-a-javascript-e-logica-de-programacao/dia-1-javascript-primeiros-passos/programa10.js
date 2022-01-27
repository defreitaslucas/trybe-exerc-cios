//delcaração dos preços de entrada
const custo = 11.50;
const venda = 23;
//declaração do valor do custo + imposto
let valorCusto;
//declaração do lucro
let lucro;

//verifica se os valores de entrada são maiores que zero
if(custo < 0 || venda < 0){
    console.log("valores incorretos");
    return;
}

//adição do imposto sobre o valor do custo
valorCusto = (custo * 0.20)+ custo;

//calculo do lucro
lucro = (venda - valorCusto)*1000;

//exibe na tela o resultado
console.log(lucro);
