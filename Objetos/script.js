const pessoa = {
    nome:'Edson',
    idade: 40,
    peso: 83.5,
    altura: 1.75,
    doador: false,
}

const produtos = {
    descricao: [],
    preco: [],
 }

 const carros = {
    marca: ['Ford', 'Fiat', 'Jeep'],
    modelo: ['Ka', 'Palio', 'Renegade'],
    ano: [1999, 2005, 2010]
 }

for(let i = 0; i < carros.marca.length; i++){
    console.log(carros.marca[i]);
};

let descricao0 = 'Goiaba';

produtos.descricao[0] = descricao0;

descricao0 = 'Macaxeira';

produtos.descricao[1] = descricao0;

let imc = pessoa.peso / (pessoa.altura * pessoa.altura);

console.log(`IMC ${imc.toFixed(2)}`)

produtos.descricao = [...produtos.descricao, 'Feijão', 'Ervilha', 'Milho'];
