// Exercício 1
let animais = []

animais.push('Corvo', 'Camaleão', 'Cobra')

// Exercício 2
const primeiroAnimal = animais.shift()

console.log(animais)

// Exercício 3
animais.unshift('Tatu', 'Iguana')

// Exercício 4
animais[1] = 'girafa'

// Exercício 5 
const frutas = ['Macã', 'Banana', 'Uva', 'Melancia', 'Maracujá']
console.log(frutas.length)

// Exercício 6
console.log('Frutas presentes no array:')
for (let fruta of frutas){
    console.log(fruta)
}