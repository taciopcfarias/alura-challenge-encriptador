var botao1 = document.querySelector(".botao1");
var botao2 = document.querySelector(".botao2");
var foto = document.querySelector(".foto");
var conteudo = document.querySelector(".conteudo__paragrafo");
var resultado = document.querySelector(".texto__resultado");
var mensagem = document.querySelector(".msg1__2parte");
var mensagem2 = document.querySelector(".msg2__2parte");
var caixa1 = document.querySelector(".caixadetexto");

botao1.onclick = encriptar;
botao2.onclick = desencriptar;

function encriptar(){
    ocultarNaFrente();
    var caixadetexto = RecuperarTexto();
    resultado.textContent = encriptarTexto(caixadetexto);
    document.getElementById('copiar').removeAttribute('disabled');
}
function desencriptar(){
    ocultarNaFrente();
    var caixadetexto = RecuperarTexto();
    resultado.textContent = desencriptarTexto(caixadetexto);
    document.getElementById('copiar').removeAttribute('disabled');
}
function RecuperarTexto(){
    var caixadetexto = document.querySelector(".caixadetexto")
    return caixadetexto.value
}
function ocultarNaFrente(){
    conteudo.classList.add("ocultar");
    mensagem.classList.add("ocultar");
    mensagem2.classList.add("ocultar");
    
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const botao__copiar = document.querySelector(".botao__copiar"); 
    botao__copiar.addEventListener("click", copiar = () => {
    var resultado = document.querySelector(".texto__resultado").textContent;
    navigator.clipboard.writeText(resultado);   

});