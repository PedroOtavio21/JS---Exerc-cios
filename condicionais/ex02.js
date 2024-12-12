// Exercício 2
const number = Math.floor(Math.random() * (5 - 1) + 1)
console.log(number)

const resposta = parseInt(prompt('Insira um número qualquer de 1 a 5'))

// Muito mais prático aplicar um condicional em caso parecido com 'if-else'
if (resposta === number){
    console.log(`Você acertou o valor randômico! Que era: ${number}`)
} else {
    console.log(`Você errou o valor inserido :(\nA resposta era: ${number}`)
}