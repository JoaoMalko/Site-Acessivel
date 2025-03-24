document.addEventListener('DOMContentLoaded', function(){
const aumentaFonteBotao = document.getElementById('botao-acessibilidade');
const diminuaFonteBotao = document.getElementById('opcoes-acessibilidade');

 botaoDeAcessibilidade.addEventListener('click', function){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    botaoDeAcessibilidade.classList.toggle('apresenta-lista');
 })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuaFonteBotao = document.getElementById('diminuir-fonte');


let tamanhoAtualFonte = 1;
aumentaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte += 0.1;
        document.boby.style.fontSize = `${tamanhoAtualFonte}ren`;

    });

    diminuiFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte -= 0.1;
        document.boby.style.fontSize = `${tamanhoAtualFonte}ren`;
});

});