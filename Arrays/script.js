const rockstars =  ["Ozzy Osbourne", "Axl Rose", "Slash", "Jim Morrison", "Flea", "Lemmy Killmister"];

const rockstars2 = ["Steven Adler", "Jimmy Page", "Jimi Hendrix", "Klaus Meine", "Dio"];



rockstars.forEach(element => {
    console.log(element);    
});

const rocks = rockstars.join('-')

console.log(`Rockstars ${rocks}`)

const todosRockstars = rockstars.concat(rockstars2);

console.log(todosRockstars.toString());


var osmar = "Altair";

function imprimeOsmar()
{
    return "Aldair";
    osmar = "Jair";
}



const num = [5, 8, 9, 7]

function calcularMediaArray(nums){
    let result = 0;
    let count = 0;
    nums.forEach(element => {
        result = result + element;
        count++;
    })
    return `Result ${result} -- Count${count}`;
}

console.log(calcularMediaArray(num))

const matriz = [["", "", ""], ["","",""],["","X",""]];

function encontraX(matriz){
    for(i = 0; i < matriz.length; i++){
        let count = 1;
        for(x = 0; x < matriz[i].length; x++){
            if(matriz[i][x] == "X"){
                return [i + 1, x + 1];
            }
        }
    }
}

console.log(encontraX(matriz));

const matrizString = [["Bola", "Bala", "Imã"], ["Vela", "Velho", "Várzea"],["Chulé", "Café", "Arroz"]];

function contaLetrasIguais(matriz, letra){
    var count = 0;
    for(i = 0; i < matriz.length; i++){
        for(x = 0; x < matriz[i].length; x++){
            for(const l of matriz[i][x]){
                console.log(`${l}`);
                if(l.toLowerCase() == letra){
                    count++;
                };
            }
        }
    }
    return count;
}

console.log(contaLetrasIguais(matrizString, "a"));



