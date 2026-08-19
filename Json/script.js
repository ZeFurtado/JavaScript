/*
const objs = [
    {
        "nome": "Jurandir",
        "Idade": "58",
        "esta_trabalhando": true,
        "detalhes_profissao": {
        "profissao": "Programador",
        "empresa": "Empresa X"
         },
        "hobbies": ["Programar", "Correr", "Ler"]
    },
    {
        "nome": "Jurandir",
        "Idade": "59",
        "esta_trabalhando": true,
        "detalhes_profissao": {
        "profissao": null,
        "empresa": null
         },
        "hobbies": ["Programar", "Correr", "Ler"]
    }
]


const obj1 = [
    {   "nome": "Jurandir",
        "Idade": "58",
        "esta_trabalhando": true,
        "detalhes_profissao": {
        "profissao": "Programador",
        "empresa": "Empresa X"
         },
        "hobbies": ["Programar", "Correr", "Ler"]
    }    
]

const obj2 = [
    {
        "nome": "Airton",
        "Idade": "55",
        "esta_trabalhando": false,
        "detalhes_profissao": {
        "profissao": "Tech Lead",
        "empresa": "Empresa Y"
         },
        "hobbies": ["Jogar", "Violão", "Ler"]
    }
]

const jsonData = JSON.stringify(objs);


console.log(jsonData);

//converter json para objeto
const objeData = JSON.parse(jsonData);

console.log(objeData);

objeData.map((pessoa) => {
    console.log(pessoa.Idade);
})

*/


const obj1 = [
    {
        "a": 1
    }
]

const obj2 = [
    { 
        "b" : 2
    }
]



function juntarObjetosJson(obj1, obj2){
    const objetos = obj1.concat(obj2);
    
    console.log(objetos);
}

juntarObjetosJson(obj1, obj2);