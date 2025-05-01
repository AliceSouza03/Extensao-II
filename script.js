document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!');
    // Você pode adicionar mais interações aqui
});

document.addEventListener('DOMContentLoaded', function() {
    const carrosselContainer = document.querySelector('.carrossel-container');
    const carrosselImagens = document.querySelector('.carrossel-imagens');
    const botaoAnterior = document.querySelector('.botao-anterior');
    const botaoProximo = document.querySelector('.botao-proximo');
    const imagens = document.querySelectorAll('.carrossel-imagens img');

    let indiceAtual = 0;
    const larguraImagem = imagens[0].offsetWidth; // Largura de cada imagem

    function moverCarrossel() {
        carrosselImagens.style.transform = `translateX(-${indiceAtual * larguraImagem}px)`;
    }

    botaoAnterior.addEventListener('click', function() {
        if (indiceAtual > 0) {
            indiceAtual--;
            moverCarrossel();
        }
    });

    botaoProximo.addEventListener('click', function() {
        if (indiceAtual < imagens.length - 1) {
            indiceAtual++;
            moverCarrossel();
        }
    });

    // Garante que a largura da imagem seja calculada corretamente no carregamento
    window.addEventListener('resize', function() {
        larguraImagem = imagens[0].offsetWidth;
        moverCarrossel();
    });
});