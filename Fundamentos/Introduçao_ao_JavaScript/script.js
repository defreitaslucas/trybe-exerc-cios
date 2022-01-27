// //  declaração de variavel
//  let age = 20;
//  let name1 = "Hulk";
// //  variaveis de tipo let da para reatribuição
//  age = 30;
// //  variavel const nao pode ser reatribuida
// const idade = 20
// //  mostrar na tela
//  console.log(age);
//  console.log(name1);
//  console.log(idade);

// //  Para fixar
// const myName = "Lucas de Freitas Abreu";
// const birthCity = "Belo horizonte";
// let birthYear = 1992;
// birthYear = 2030;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// // tipos primitivos (referencia e valores)
// let movie = "Avengers"; //string literal
// let score = 10.89; //number literal
// let isValid = true // true or false - boolean
// let name; //undefined
// let color = null; //redefinição de valor (nula(o))

// //aritmética (+,-,*,/,** (exponencial))
// let salary = 3500;
// console.log(salary + salary);
// console.log(salary - salary);
// console.log(salary * salary);
// console.log(salary / salary);
// console.log(3 ** 3);

// // acrescentar e decrementar ++ --
// salary++;
// // salary--; 

// console.log(salary);

//exercicio tipos primitivos e operações aritiméticas
// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientEmail, typeof patientId, typeof patientInfo, typeof isEnrolled, typeof patientAge)

//exercicios aritmetico
// const base = 5;
// let height = 8;
// const area = base*height;
// const perimeter = base+height+area

// console.log(base);
// console.log(height);
// console.log(area);
// console.log(perimeter);

// condições if e else (condicional)
// let trybe = 16.42;

// if (trybe >= 14 && trybe < 14.40){
//     console.log("Esquenta");
// }
// else if (trybe >= 16.30 && trybe < 17.50){
//     console.log("Aula ao vivo")
// }
// else if (trybe >= 19.40 && trybe < 20){
//     console.log("Fechamento");
// }
// else {
//     console.log("Fora dos momentos síncronos");
// }

//exercicios if else
// const notaPessoa = 100;

// if (notaPessoa >= 80){
//     console.log("Parabéns, você foi aprovado(a)");
// }
// else if (notaPessoa <= 80 && notaPessoa >= 60) {
//     console.log("Você está na nossa lista de espera");
// }
// else {
//     console.log("Você foi reprovado(a)");
// }

//Operadores lógicos && || ! (and(e), or(ou), not(nao))
//OPERADOR &&
// operar && so retorna true (as duas operações tem que ser verdadeiras)
// const currentHour = 3.59;
// let message = null;

// if (currentHour >= 22){
//     message = "Não deveriamos comer nada, é hora de dormir"
// }
// else if (currentHour >= 18 && currentHour <= 22){
//     message = "Rango da noite, vamos jantar :D"
// }
// else if (currentHour >= 14 && currentHour <= 18){
//     message = "Vamos fazer um bolo pro café da tarde?"
// }
// else if (currentHour > 11 && currentHour < 14){
//     message = "Hora do almoço!!!"
// }
// else if (currentHour > 4 && currentHour <= 11 ) {
//     message = "Hmmm, cheiro de café recém passado"
// }
// console.log(message);

//OPERADOR ||
// operar || precisa que apenas uma condição seja verdadeira isso ou aquilo
// let weekDay = "sabado";

// if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira"){
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D")
// }
// else {
//     console.log("Finalmente, descanso merecido UwU")
// }

//OPERADOR NOT
//Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo!! Se tivermos uma variável ou valor considerado true , podemos gerar o resultado oposto simplesmente fazendo !variável . Ou seja, false .
//Então, sabendo que o resultado original da operação ali em cima é true , quando a gente insere o operador NOT antes da operação, teremos o valor contrário a nossa resposta final, que é false .,

//switch case
// let status = "ola";

// switch (status) {
//     case "aprovado":
//         console.log(status)
//         break;

//     case "reprovado":
//         console.log(status)
//         break;

//     case "lista":
//         console.log(status)
//         break;

//     default:
//         console.log("não se aplica")
//         break;
// }