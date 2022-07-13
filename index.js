var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

function recuperarPalcoJogo(){
altura = window.innerHeight;
largura = window.innerWidth;
console.log(altura, largura)
}

var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'winner.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

function geraPosicao(){

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if(vidas > 3) {
            window.location.href = 'gameover.html'
        } else {
        document.getElementById('v' + vidas).src="/assets/images/coracao_vazio.png";
        vidas++;
    }
}
    
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
mosquitoDOM.onclick = function(){
    this.remove()
}
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