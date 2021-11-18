// COLOQUE SEU CÓDIGO AQUI
//exercicio 1 - adicione a tag h1 com o texto "Exercicio 5.2 - JavaScript DOM" como filho da tag body
let body = document.getElementsByTagName('body');

let h1Filho = document.createElement('h1');
h1Filho.innerText = 'Exercicio 5.2 - JavaScript DOM'

body[0].appendChild(h1Filho);

//exercicio 2 - Adicione a tag main com a classe main-content como filho da tag body ;
let main = document.createElement('main');
main.className = 'main-content';

body[0].appendChild(main);
//exercicio 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let section = document.createElement('section')
section.className = 'center-content'

main.appendChild(section)
//exercicio 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let p = document.createElement('p')
p.innerText = 'Olá sou estudante da trybe'

section.appendChild(p)

//exercicio 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let sectionLeftContent = document.createElement('section')
sectionLeftContent.className = 'left-content'

main.appendChild(sectionLeftContent)

//exercicio 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let sectionRightContent = document.createElement('section')
sectionRightContent.className = 'right-content'

main.appendChild(sectionRightContent)
//exercicio 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement('img')
img.src = 'https://picsum.photos/200'
img.className = 'small-image'

sectionLeftContent.appendChild(img)
//exercicio 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let list = document.createElement('ul')


//exercicio 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.