/*
function manipulandoString(palavra){
    console.log(`${palavra}`);

    return palavra.indexOf("A");
}

console.log(`A letra a está na posição ${manipulandoString("Abelha")} da palavra`);

let texto = "   -Loaded like a feight train, flying like an airplane, feeling like a spacebrain one more time tonight- ";
let texto2 = "Verificando espaço"
function utilizandoTrim(texto){
    let textoEspaco = texto.trim();
    
    console.log(`resultado do trim()`);
    console.log(`${textoEspaco}${texto2}`);

    console.log(`Resultado do trimEnd()`);
    console.log(`${texto.trimEnd()}${texto2}`);

    console.log(`Resultado do trimStart()`);
    console.log(`${texto.trimStart()}${texto2}`);

    console.log(`Resultado do trimLeft()`);
    console.log(`${texto2}${texto.trimLeft()}${texto2}`);

    console.log(`Trim right`);
    console.log(`${texto2}${texto.trimRight()}${texto2}`);
}


utilizandoTrim(texto);

*/


function replaceLetters(texto, c){
    const vogais = "aeiouAEIOU";

    let textoArray = texto.split("");

    for(let i =0; i < textoArray.length; i++){
        if(vogais.lastIndexOf(textoArray[i]) >= 0){
            textoArray[i] = c;
        }
    }

    return textoArray.toString();

    
}

console.log(replaceLetters("Mandioca", "*"));

function ehPalindromo(texto){
    texto = texto.toLowerCase();
    texto = texto.replace(/\s/g, "");

    textoInvertido = texto.split("");

    textoInvertido = textoInvertido.reverse().join("");
    
    console.log(`Texto normal ${texto} Texto Invertido ${textoInvertido}`);

    if(texto == textoInvertido){
        console.log("É palíndromo");
    }
}

console.log(ehPalindromo("Anotaram a data da maratona"));


function quantidadeDePalavras(texto){
    const textoArray = texto.trim().split(/\s/g);

    for(const l of textoArray){
        console.log(l);
    }

    return textoArray.length;
}

console.log(`O texto possui ${quantidadeDePalavras("  Anotaram a data       da maratona")} palavras`);




