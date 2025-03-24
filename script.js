document.addEventListener('DOMContentLoaded', function(){
const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuaFonteBotao = document.getElementById('aumentar-fonte');

 botaoDeAcessibilidade.addEventListener('click', function){
    


    
let tamanhoAtualFonte = 1;
aumentaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte += 0.1;
        document.boby.style.fontSize = '${tamanhoAtualFonte}ren';

    });

    diminuaFonteBotao.addEventListener('click',function(){
        tamanhoAtualFonte -= 0.1;
        document.boby.style.fontSize = '${tamanhoAtualFonte}ren';
});
});