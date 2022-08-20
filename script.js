
/* 
Boas vindas ao primeiro desafio!

Durante estas duas semanas, vamos trabalhar em uma aplicação que criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

    A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
    O resultado deve ser exibido na tela.

*/


//Função de encriptação
function encriptarTexto(texto){

    arrayTexto = [];
    var TextoRecebido = texto.length;
    
    //Guardando texto dentro do array
    for(var indiceTexto = 0; indiceTexto < TextoRecebido; indiceTexto++){
        arrayTexto.push(texto.charAt(indiceTexto));
    }
    
    var ArrayRecebido = arrayTexto.length;

    //Percorra a matriz para trocar o texto conforme necessário
    for(var indiceArray = 0; indiceArray < ArrayRecebido; indiceArray++){
        if(arrayTexto[indiceArray] == 'e'){
            arrayTexto.splice(indiceArray, 1, 'enter');
        }else if(arrayTexto[indiceArray] == 'i'){
            arrayTexto.splice(indiceArray, 1, 'imes');
        }else if(arrayTexto[indiceArray] == 'a'){
            arrayTexto.splice(indiceArray, 1, 'ai');
        }else if(arrayTexto[indiceArray] == 'o'){
            arrayTexto.splice(indiceArray, 1, 'ober');
        }else if(arrayTexto[indiceArray] == 'u'){
            arrayTexto.splice(indiceArray, 1, 'ufat');
        }
    }

    //Passando índice do array para a string
    var textoEncriptado = "".concat(...arrayTexto);
    
    //Imprimir o resultado no input
    console.log(textoEncriptado);
    var textoSaida = document.querySelector("#resultado");
    textoSaida.value = textoEncriptado;
}

//Função para Desencriptar
function desencriptarTexto(texto){
    //Substituir os valores correspondentes
    var textoDesencriptado = texto.replace(/ai/g,'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g,'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g,'u');

    //Imprimir o resultado no input
    console.log(textoDesencriptado);
    var textoSaida = document.querySelector("#resultado");
    textoSaida.value = textoDesencriptado;
}

//Capturando os botões e passando a eles as funções
var botaoEncriptar = document.querySelector("#btn-encriptar");
botaoEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    encriptarTexto(textoEntrada);
});

var botaoDesencriptar = document.querySelector("#btn-desencriptar");
botaoDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    desencriptarTexto(textoEntrada);
});


//----- Função para copiar para área de transferência -----//
function copy() {
    var copyText = document.querySelector("#resultado");
    copyText.select();
    document.execCommand("copy");
}  
document.querySelector("#btn-copy").addEventListener("click", copy);

//----- Função para limpar os inputs -----//
function limpar(input){
    input.value= "";
}

var botaoLimparEntrada = document.querySelector("#btn-limparEntrada");
botaoLimparEntrada.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto");
    limpar(textoEntrada);
});

var botaoLimparSaida = document.querySelector("#btn-limparSalida");
botaoLimparSaida.addEventListener("click",function(event){
    event.preventDefault();
    var textoSaida = document.querySelector("#resultado");
    limpar(textoSaida);
});
