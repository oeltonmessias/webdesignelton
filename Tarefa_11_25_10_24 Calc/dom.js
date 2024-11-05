
const display = document.getElementById('display');


const botoes = Array.from(document.querySelectorAll('.botao'));


let expressao = "";


function atualizarDisplay(valor) {
    display.innerHTML += valor;
}


botoes.forEach(botao => {
    botao.addEventListener('click', (e) => {
        const valorBotao = e.target.textContent;

        atualizarDisplay(valorBotao);
    });
});
