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
sectionRightContent.appendChild(list)

let array = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez']

let ul = document.getElementsByTagName('ul')[0]

for(let index = 0; index < array.length; index += 1){
    let numeros = array[index]
    let li = document.createElement('li')
    li.innerText = numeros

    ul.appendChild(li)
}
//exercicio 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
    let h3MainFilho = document.createElement('h3')
    main.appendChild(h3MainFilho)
}

//BONUS
//exercicio 1 - Adicione a classe title na tag h1 criada;
h1Filho.className = 'title'

//exercicio 2 - Adicione a classe description nas 3 tags h3 criadas;
let h3MainFilho = document.querySelectorAll('h3')
console.log(h3MainFilho)
for (let index = 0; index < h3MainFilho.length; index += 1){
    h3MainFilho[index].className = 'description'
}
//exercicio 3 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let remove = document.querySelector('.main-content')

remove.removeChild(sectionLeftContent)


//exercicio 4 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
let style = document.querySelector('.right-content');
style.style.cssText = 'margin-right: auto';

//exercicio 5 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
main.style.backgroundColor = 'green'


//exercicio 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let removeElementosLista = document.querySelectorAll('li')
for (let index = 0; index < removeElementosLista.length; index += 1){
    let removeLi = removeElementosLista[index]
    if(removeLi.innerText.includes('nove') || removeLi.innerText.includes('dez')){
        removeLi.remove();

    }
}