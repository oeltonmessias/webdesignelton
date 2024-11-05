
document.getElementById('botaoImagem').addEventListener('click', function() {
    const imagem = document.getElementById('imagem');
    imagem.src = './FotoBikeElton.jpeg';
});


document.getElementById('botaoTitulo').addEventListener('click', function() {
    const titulo = document.getElementById('titulo');
    titulo.textContent = "Elton";
});


document.getElementById('botaoParagrafo').addEventListener('click', function() {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.style.color = 'red';
});


document.getElementById('botaoAudio').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.play();
});

document.getElementById('botaoAlterar').addEventListener('click', function() {
    const botoes = document.querySelectorAll('.botoes-alterar button');
    botoes.forEach(botao => {
        botao.classList.toggle('muda-cor');
    });
});
