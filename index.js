var altura = 0;
var largura = 0;

function recuperarPalcoJogo(){
altura = window.innerHeight;
largura = window.innerWidth;
console.log(altura, largura)
}

function geraPosicao(){

    if(document.getElementById('mosquito')) document.getElementById('mosquito').remove();
    
recuperarPalcoJogo();    
var posicaoX = Math.floor(Math.random() * largura) - 90;
var posicaoY = Math.floor(Math.random() * altura) - 90;

posicaoX = posicaoX < 0 ? 0 : posicaoX;
posicaoY = posicaoY < 0 ? 0 : posicaoY;
console.log(posicaoX, posicaoY)

var mosquitoDOM = document.createElement('img');
mosquitoDOM.src = './assets/images/mosquito.png'
mosquitoDOM.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
mosquitoDOM.style.left = posicaoX + 'px';
mosquitoDOM.style.top = posicaoY + 'px';
mosquitoDOM.style.position = 'absolute';
mosquitoDOM.id = 'mosquito'
document.body.appendChild(mosquitoDOM)
}


function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquitoPequeno'
            case 1:
                return 'mosquitoMedio'
                case 2:
                    return 'mosquitoGrande'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA'
            case 1:
                return 'ladoB'
    }
}