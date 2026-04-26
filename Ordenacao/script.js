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
