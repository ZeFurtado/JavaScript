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

