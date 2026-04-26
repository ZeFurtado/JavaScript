var array1 = [0, 5, 8 ,1, 3, 7, 9, 4, 6];
const arrayString = array1.toString();

console.log(`[Busca linear] Alvo: ${4} Array: ${arrayString} `);

function buscarElemento(lista, alvo){
    for(i = 0; i < lista.length; i++){
        if(lista[i] == alvo){
            return i;
        }
    }
}

console.log(`O número 4 se encontra na posição ${buscarElemento(array1, 4)} do array`);


const arrayOrdenado = [3,6,9,15,24,36,45,55,87];
const alvo = 55;

console.log(`[Busca binária] Alvo: ${alvo} Array: ${arrayOrdenado.toString()}`);

function buscaBinaria(lista, alvo){
    let inicio = 0;
    let fim = lista.length - 1;
    let meio = parseInt((inicio + fim) / 2);
    count = 0;

    console.log(`Inicio: ${lista[inicio]}`);
    console.log(`Meio: ${lista[meio]}`);
    console.log(`Fim: ${lista[fim]}`);
    
    while(inicio <= fim){
        let meio = parseInt((inicio + fim) / 2);
        let valor = lista[meio];

        if(valor == alvo){
            return meio;
        }else if(alvo < valor){
            fim = meio - 1;
        }else if(alvo > valor){
            inicio = meio + 1;
        }
    }
    return `Não foi possível encontrar o número ${alvo} no array`;
    
}

console.log(`Resultado: ${buscaBinaria(arrayOrdenado, alvo)}`);

console.log(`[Ordenação por inserção] `)



