function primeiraFuncao(){
    document.write(`primeira função`);
}

primeiraFuncao();


function dizerNome (nome, numVezes){
    for(i = 0; i<numVezes; i++)
        {
            document.write(`${nome}: ${numVezes} vezes` );
            numVezes--;
        }
}
let numVezes = 5;
dizerNome(`Augusto`, numVezes);

function quantidadeDeCaracteres(palavra)
{
    if(typeof(palavra) !== String)
        {
            throw new console.error("O tipo de objeto não é uma string");
            
        }
}

function handleinput()
{
    const data = document.getElementById("hectares");

    let hectares = data.value;
    
    document.getElementById("output"). innerText = hectares * 10000;
}

var numeros = [0, 8, 9, 8]

let result;
factorial = function(number)
    {
        if(number == 0){
            return 1;   
        } else{
            result = number * factorial(number - 1);
            return result;
        }
    }

const fatorial = (x) => factorial(x);

console.log(fatorial(5));



function converterParaMinusculo(palavra){
    if(typeof(palavra) == "undefined"){
        return " ";
    }else{
        return palavra.toLowerCase();
    }
}

console.log(`Converter para minúsculo ${converterParaMinusculo(palavra)}`);

var palavra = "AMIANTO";

let num = 8;

function numeroParaString(number){
    if(number === "undefined" || number == null || Number.isNaN(number)){
        return " ";
    }else{
        return number.toString();
    }
}

console.log(`Número para string ${numeroParaString(num)} Verificando tipo: ${typeof(numeroParaString(num))}`)

function inverterNumero(numero){
    if(typeof(numero) != "number" || numero <= 0){
        return 0;
    }else{
        const palavra = numero.toString().split('');
        const numeroInvertido = [];

        for(i = palavra.length - 1; i >= 0; i--){
            numeroInvertido.push(palavra[i]);
        }
        return numeroInvertido.toString().replaceAll(",", "");
    }
}

console.log(inverterNumero(8877));
