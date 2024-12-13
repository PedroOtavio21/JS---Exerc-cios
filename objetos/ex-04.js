const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    tracao: 'Dianteira',
    portas: 4,
    ano: 2008,
}

for (let chave in carro){
    console.log(chave, carro[chave])
}