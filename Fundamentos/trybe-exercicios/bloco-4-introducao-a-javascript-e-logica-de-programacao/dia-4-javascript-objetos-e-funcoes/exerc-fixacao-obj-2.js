let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let key in names){
      console.log('Ola '+names[key])
  }

console.log('\n')

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let chave in car){
      console.log(chave, car[chave])
  }