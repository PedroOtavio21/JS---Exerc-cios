// Exercício 3
const nota = parseFloat(prompt('Insira a média que você adquiriu na disciplina:'))

// Muito mais prático aplicar um condicional em caso parecido com 'if-else'
if (nota < 6){
    console.log('Reprovado')
} else if (nota < 7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}