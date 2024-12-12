// Exercício 1

const idade = parseInt(prompt('Insira a sua idade:'))

if (idade < 13){
    console.log(`A partir de sua idade (${idade}), você é:`)
    console.log('Criança')
} else if (idade < 17){
    console.log(`A partir de sua idade: (${idade}), você é:`)
    console.log('Adolescente')
} else {
    console.log(`A partir de sua idade: (${idade}), você é:`)
    console.log('Adulto')
}