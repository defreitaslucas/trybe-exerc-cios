function alteraTextoP() {
    let altera = document.querySelector(".center-content p")
    altera.innerText = "Programador Senior";
    return altera
}
alteraTextoP();

function alteraCorAmarelo() {
    let alteraCorAmarelo = document.getElementsByClassName("main-content")[0]
    alteraCorAmarelo.style.backgroundColor = "rgb(76,164,109)";
    return alteraCorAmarelo
}
alteraCorAmarelo()

function alteraCorVermelha() {
    let alteraCorVermelha = document.querySelector(".center-content")
    alteraCorVermelha.style.backgroundColor = 'white'
    return alteraCorVermelha
}
alteraCorVermelha()

function corrigeTexto() {
    let corrigeTextoH1 = document.querySelector("h1")
    corrigeTextoH1.innerText = 'Exercício 5.1 - JavaScript'
    return corrigeTextoH1
}
corrigeTexto()

function paragraphUpperCase() {
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
  }
  paragraphUpperCase();

  // Exercício 6
  function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);
    }
  }
  showParagraphs();