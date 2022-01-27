// Faça uma lista com as suas frutas favoritas
const specialFruit = ['amora', 'açaí', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'granola', 'xarope'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens]
};

//console.log(fruitSalad(specialFruit, additionalItens));


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const professional = {
  ...user,
  ...jobInfos
}

let {name, age, nationality, profession, squad, squadInitials} = professional

//console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession}, and my squad is ${squadInitials}-${squad}`)

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;

console.log(realizaSaudacao(saudacao)); // Olá


