// Exercício 1
console.log("Números de 0 a 10")
for (let i = 0; i <= 10; i++){
    console.log(i)
}

// Exercício 2
console.log('\nNúmeros ímpares de 0 a 20')
for (let i = 0; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

// Exercício 3
console.log('\nNúmero de 0 a 10 com while')
let i = 0
while (i <= 10){
    console.log(i)
    i++
}

// Exercício 4
console.log('\nNúmeros de 0 a 100')
for (let i = 0; i <= 100; i++){
    if (i === 50){
        console.log('Número 50 atingido!')
        break
    }
    console.log(i)
}

// Exercício 5
console.log('\nNúmeros de 0 a 20, pulando no 13')
for(let i = 0; i <= 20; i++){
    if (i === 13){
        continue
    }
    console.log(i)
}

// Exercício 6
const names = ['Paulo', 'Gabriel', 'Pedro', 'Maia', 'Marques']
console.log('\nIteração em nomes do array')
for (let name of names){
    console.log(name)
}