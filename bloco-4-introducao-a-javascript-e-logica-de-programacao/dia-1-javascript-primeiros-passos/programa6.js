let pecaXadrez = "dama";
let movimentoPeca;

pecaXadrez.toLowerCase();

if(pecaXadrez == "peao" || pecaXadrez == "torre" || pecaXadrez == "cavalo" || pecaXadrez == "bispo" || pecaXadrez == "rainha" || pecaXadrez == "rei"){
    if(pecaXadrez == "peao"){
        movimentoPeca = "Andam apenas uma casa para frente e capturam em diagonal apenas 1 casa de distancia. Em seu primeiro movimento, podem andar 2 casas";
    }
    else if(pecaXadrez == "torre"){
        movimentoPeca = "Movimenta quantas casas quiser na horizontal ou vertical, porém em apenas um sentido por jogada"
    }
    else if(pecaXadrez == "cavalo"){
        movimentoPeca = "Os cavalos se movem 2 casas em uma direção e 1 casa em um angulo de 90º, ou no formato da letra 'L'. Cavalos são as unicas peças que podem se mover sobre as outras peças"
    }
    else if(pecaXadrez == "bispo"){
        movimentoPeca = "Movimenta apenas pelas diagonais em um sentido por jogada. Cada bispo começa em uma casa de uma cor (clara ou escura) e deve sempre permanecer nesta cor"
    }
    else if(pecaXadrez == "rainha"){
        movimentoPeca = "Peça mais poderosa, pode-se movimentar em qualquer direção em um unico sentido na jogada e em quantas casas quiser. Caso capture uma peça no caminho o movimento termina ali"
    }
    else if(pecaXadrez == "rei"){
        movimentoPeca = "Peça mais importante, caso capturada o jogo acaba. Ele pode se mover em todas as direçoes porém em apenas 1 casa por vez. Não se pode capturar um rei com outro rei"
    }
}
else {
    console.log("Está não é uma peça de xadrez!");
}

console.log(movimentoPeca);