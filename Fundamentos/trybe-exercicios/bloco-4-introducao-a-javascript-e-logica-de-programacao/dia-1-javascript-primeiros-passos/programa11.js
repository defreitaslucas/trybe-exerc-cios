//declaração do salario bruto
const salarioBruto = 8814.81;
//declaração do salario líquido
let salarioLiquido = 0;
//declaração do salario base
let salarioBase = 0;
//declaração do INSS
let inss = 0;
//declaração do IR
let ir = 0;

//condicional INSS
if(salarioBruto <= 1556.94){
    inss = (salarioBruto * 0.08)
    salarioBase = salarioBruto - inss
}
else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = (salarioBruto * 0.09)
    salarioBase = salarioBruto - inss
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = (salarioBruto * 0.11)
    salarioBase = salarioBruto - inss
}
else if(salarioBruto > 5189.82){
    inss = 570.88
    salarioBase = salarioBruto - inss
}

//condicional IR
if(salarioBase <= 1903.98){
    salarioLiquido = salarioBase
}
else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    ir = (salarioBase * 0.075) - 142.80
    salarioLiquido = salarioBase - ir
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    ir = (salarioBase * 0.15) - 354.80
    salarioLiquido = salarioBase - ir
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
    ir = (salarioBase * 0.225) - 636.13
    salarioLiquido = salarioBase - ir
}
else if (salarioBase > 4664.68){
    ir = (salarioBase * 0.275) - 869.36
    salarioLiquido = salarioBase - ir
}


console.log("Salario Bruto: ", salarioBruto)
console.log("Parcela INSS: ", inss.toFixed(2))
console.log("Parcela IR: ", ir.toFixed(2))
console.log("Salario Liquido: ", salarioLiquido.toFixed(2))

