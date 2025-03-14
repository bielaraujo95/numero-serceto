

let listaDeNumerosSorteados = [];
let numeroLimite = 20;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
 
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
 
    if (chute === "") {
        exibirTextoNaTela('p', 'Por favor, insira um número.');
        return;
    }
 
    if (chute > numeroLimite) {
        exibirTextoNaTela('p', 'Por favor, insira um número menor que 20.');
        return;

    }
    if (chute < 0) {
        exibirTextoNaTela('p', 'Por favor, insira um número maior que zero.');
        return;

    }
 
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Meus parabéns, clique em novo jogo e volte a brincar!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);
 
    } else if (tentativas == 3) {
        exibirTextoNaTela('h1', 'Errou! Número máximo de tentativas é 3');
        exibirTextoNaTela('p', 'O número secreto era: ' + numeroSecreto);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);
 
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
 
}
 
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
 
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
 
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Adivinhe o <span class="container__texto-azul">numero secreto</span>');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 20');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chute').removeAttribute('disabled');
}