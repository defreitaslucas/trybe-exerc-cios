const fs = require('fs').promises;

async function readAll() {
  try{
    const simpsons = await fs.readFile('./simpsons.json', 'utf-8');
    const data = JSON.parse(simpsons);
    const resultado = data.map(({id, name}) => `${id} - ${name}`);
    resultado.forEach((personagem) => console.log(personagem));
  } catch (error) {
    console.error(`Não foi possivel ler o arquivo: ${simpsons}\n Erro: ${erro}`);
  }
}

async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  return chosenSimpson;
}

async function filterSimpsons() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);
  // - Filtrar o array para remover as personagens que devem ser removidas
  const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

function main() {
  //chamando a primeira função
  readAll();
  //chamando a segunda função
  getSimpsonById(1)
    .then(simpson => console.log(simpson));
  //chamando a terceira função
  filterSimpsons();
  //Chamando a quarta função
  createSimpsonsFamily();
  //chamando a quinta função
  addNelsonToFamily();
  //chamando a sexta função
  replaceNelson();
}

main();