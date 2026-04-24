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

