/* 

    Objetivo- quando clicar no botão mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botoes;

    - passo 2 - dar um jeito de identificar o lique do usuário no botao;

    - passo 3 - desmarcar o botao selecionado anterior;

    - passo 4 - marcar o botao clicado como e estivesse selecionado;

    - passo 5 - esconder a imagem de fundo anterior;

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado; 

*/

        // - passo 1 - dar um jeito de pegar o elemento HTML dos botoes;

        const botoesCarrossel = document.querySelectorAll('.botao');
        const imagens = document.querySelectorAll('.imagem')

        // - passo 2 - dar um jeito de identificar o clique do usuário no botao;

        botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
        //- passo 3 - desmarcar o botao selecionado anterior;
        desativarBotaoSelecionado();

        // - passo 4 - marcar o botao clicado como e estivesse selecionado;
        selecionarBotaoCarrossel(botao);

        // - passo 5 - esconder a imagem ativa do fundo;
        esconderImagemAtiva();
        
        // - passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado; 
        mostrarImagemDeFundo(indice);
    })
})
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

