// console.log(document.querySelector('#elementoOndeVoceEsta').parentNode)
// let pai = document.querySelector('#elementoOndeVoceEsta').parentNode
// pai.style.color = 'red'

// console.log(document.querySelector('#elementoOndeVoceEsta').firstElementChild)
// let primeiroFilho = document.querySelector('#elementoOndeVoceEsta').firstElementChild;
// primeiroFilho.innerText = 'Olá você é o primeiro Filho do Filho'

// console.log(document.querySelector('#pai').firstElementChild)

// console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling)

// console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling)

// console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling)

// console.log(document.querySelector('#pai').lastElementChild.previousElementSibling)

// let paiElementoOndeVoceEsta = document.querySelector('#pai')

// let irmaoElementoOndeVoceEsta = document.createElement('section')

// paiElementoOndeVoceEsta.appendChild(irmaoElementoOndeVoceEsta)

// let elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta')

// let filhoElementoOndeVoceEsta = document.createElement('section')

// elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta)

// console.log(document.querySelector('#elementoOndeVoceEsta'))

// let filhoDoPrimeiroFilhoDoFilho = document.createElement('p')

// let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho')

// primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho)

// console.log(primeiroFilhoDoFilho)

// console.log(document.querySelector('#primeiroFilhoDoFilho').parentElement.nextElementSibling)

const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();