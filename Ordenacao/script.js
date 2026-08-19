//Busca Linear

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

//Busca Binária
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


//Insertion Sort
const arrayDesordenado = [3, 8, 7, 2, 1, 9];

function insertionSort(array){
    for(i = 1; i < array.length; i++){
        let troca = array[i];
        let n = i - 1;

        while(n >=0 && array[n] > troca){
            array[n + 1] = array[n];
            n = n -1;
        }
        
        array[n + 1] = troca;
    }

    return array;
}
console.log(`[Ordenação por inserção] ${insertionSort(arrayDesordenado)}`);

//Bubble Sort
const arrayDesordenado2 = [35,65,78,12,45,98];

function bubbleSort(array){
    for(let i = array.length - 1; i > 0; i--){

        for(let j = 0; j < i; j++){
            if(array[j] > array[j + 1]){
                let troca = array[j + 1];
                array[j + 1] = array[j];
                array[j] = troca;
            }
        }
    }

    return array;
}

console.log(`[Ordenação por Bolha] ${bubbleSort(arrayDesordenado2)}`);


//Selection Sort
const arrayDesordenado3 = [25,98,78,45,13,65]
console.log(`Array desordenado 3 ${arrayDesordenado3}`);

function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let menorNumero = array[i];
        let j = i + 1;
        let posicaoMenorNumero = i;

        while(j < array.length){
            if(array[j] < menorNumero){
                menorNumero = array[j];
                posicaoMenorNumero = j;
            }
            j++;
        }

        array[posicaoMenorNumero] = array[i];
        array[i] = menorNumero;
    }

    return array;
}


console.log(`[Ordenação por seleção] ${selectionSort(arrayDesordenado3)}`);


//Quick Sort

const arrayDesordenado4 = [9,4,3,8,2,7,0,6,1,5];

function quickSort(array){
    if(array.length <= 1){
        return array;
    }

    let pivot = array[array.length - 1];
    let left = [];
    let right = [];
    let i = - 1;
    
    for(let j = 0; j < array.length - 1; j++){
        if(array[j] < pivot){
            i++;            
            let troca = array[i];
            array[i] = array[j];
            array[j] = troca;
            left.push(array[i]);
        }else{
            right.push(array[j]);
        }

    }

    return [...quickSort(left), pivot, quickSort(right)]; 
    
    
}

console.log(`[Ordenação por quick sort] ${quickSort(arrayDesordenado4)}`);


//Merge Sort

const arrayDesordenado5 = [38, 27, 43, 3, 9, 82, 10];

function mergeSort(array){
    if(array.length <= 1){
        return array;
    }

    const meio = Math.floor(array.length / 2);
    const esquerda = array.slice(0, meio);
    const direita = array.slice(meio);

    return merge(mergeSort(esquerda), mergeSort(direita));
    
    function merge(esquerda, direita){
        let result = [];
        let indexEsquerda = 0;
        let indexDireita = 0;

        while(indexEsquerda < esquerda.length && indexDireita < direita.length){
            if(esquerda[indexEsquerda] < direita[indexDireita]){
                result.push(esquerda[indexEsquerda]);
                indexEsquerda++;
            }else{
                result.push(direita[indexDireita]);
                indexDireita++;
            }
        }

        return result.concat(esquerda.slice(indexEsquerda).concat(direita[indexDireita]));
    }
}

console.log(`Ordenação por Merge Sort ${mergeSort(arrayDesordenado5)}`);

console.log(`Números repetidos`);

const arrayNumRepetidos = [5,7,7,7,8,8,8,8,9,9,9]
function NumerosRepetidos(array){
    let numberCount = 0;
    let number = array[0];

    for(let i = 1; i < array.length; i++){
        let numberCount2 = 1;
        let index = i;
        while(array[i - 1] == array[index] && index < array.length){
            numberCount2++;
            index++;
        }

        if(numberCount2 > numberCount){
            number = array[i];
            numberCount = numberCount2;
        }

        console.log(`Número mais repetido até esta iteraçõa ${number} aparece ${numberCount} vezes`);
    }
}

NumerosRepetidos(arrayNumRepetidos);

